# syntax=docker/dockerfile:1.7
#
# CarTasker Backend — multi-stage build for Fly.io
#
# Stage layout:
#   deps      → install ALL deps (incl. dev) for the build
#   builder   → generate Prisma client + compile TypeScript
#   prod-deps → install ONLY production deps for the runtime image
#   runtime   → minimal image, non-root, runs node dist/main
#
# Build:    docker build -t cartaskers-be .
# Run:      docker run -p 8000:8000 --env-file .env cartaskers-be

ARG NODE_VERSION=20.18.1

# ---------- deps: install all dependencies (incl. dev) ----------
FROM node:${NODE_VERSION}-alpine AS deps
WORKDIR /app

# Prisma needs openssl at install time on alpine
RUN apk add --no-cache openssl libc6-compat

COPY package.json package-lock.json* ./
COPY prisma ./prisma

# `npm ci` is reproducible and respects package-lock.json exactly.
# Prisma's postinstall runs `prisma generate` here.
RUN npm ci --no-audit --no-fund

# ---------- builder: compile TypeScript ----------
FROM node:${NODE_VERSION}-alpine AS builder
WORKDIR /app

RUN apk add --no-cache openssl libc6-compat

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/prisma ./prisma
COPY . .

# `nest build` outputs to dist/
RUN npm run build

# ---------- prod-deps: production-only dependencies ----------
FROM node:${NODE_VERSION}-alpine AS prod-deps
WORKDIR /app

RUN apk add --no-cache openssl libc6-compat

COPY package.json package-lock.json* ./
COPY prisma ./prisma

# Install only production deps. Prisma postinstall runs here too,
# generating the client into node_modules/.prisma/client.
RUN npm ci --omit=dev --no-audit --no-fund \
    && npm cache clean --force

# ---------- runtime: minimal image, non-root ----------
FROM node:${NODE_VERSION}-alpine AS runtime
WORKDIR /app

# OpenSSL is required by Prisma at runtime.
# tini is a minimal init that reaps zombies and forwards signals (clean SIGTERM on Fly machine shutdown).
RUN apk add --no-cache openssl libc6-compat tini

ENV NODE_ENV=production \
    PORT=8000 \
    NODE_OPTIONS="--enable-source-maps"

# `node` user (uid 1000) ships with the official node image.
COPY --chown=node:node --from=prod-deps /app/node_modules ./node_modules
COPY --chown=node:node --from=builder   /app/dist          ./dist
COPY --chown=node:node --from=builder   /app/prisma        ./prisma
COPY --chown=node:node package.json ./

USER node

EXPOSE 8000

# tini as PID 1, then node. The shell form would not forward signals correctly.
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "dist/main"]
