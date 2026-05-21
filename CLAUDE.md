# CLAUDE.md

Guidance for AI assistants working in this repo. Read this **before** making changes.

For human onboarding (setup, env vars, db, endpoints), see `README.md`, `SETUP.md`,
`GETTING-STARTED.md`, `STRUCTURE.md`, `FILE-INDEX.md`, `API-TESTING.md`.

---

## Project at a glance

NestJS + TypeScript + Prisma + PostgreSQL backend for CarTasker (mobile car
services marketplace). Modules: `auth`, `users`, `providers`, `categories`,
`jobs`, `bids`, `messages`, `dashboard`, plus `common` and `repositories`.

---

## Architecture rules (from the refactor — do NOT regress)

### 1. Use the helpers. Don't inline.

| Don't write | Write |
|---|---|
| `(page - 1) * pageSize` | `PaginationHelper.calculateSkip(page, pageSize)` |
| `Math.ceil(total / pageSize)` | `PaginationHelper.calculateTotalPages(total, pageSize)` |
| Building a `{ data, pagination: {...} }` literal | `PaginationHelper.buildResponse(data, total, page, pageSize)` |
| `const { page = 1, pageSize = 20 } = filters` | `PaginationHelper.normalize(filters)` |
| `if (job.customerId !== userId) throw new UnauthorizedActionException()` | `AuthorizationHelper.ensureOwner(job, userId, 'customerId')` |
| `if (bid.status !== BidStatus.PENDING) throw new InvalidJobStatusException(msg)` | `StatusValidator.requireStatus(bid, BidStatus.PENDING, msg)` |
| `value ? new Date(value) : null` | `DateHelper.parseOrNull(value)` |
| `await bcrypt.hash(pw, 10)` / `bcrypt.compare(...)` | `passwordService.hash(pw)` / `passwordService.verify(...)` |
| `const x = await repo.findUnique({ id }); if (!x) throw new ResourceNotFoundException('X')` | `await repo.findByIdOrThrow(id, 'X')` |
| Same find-or-throw with a non-`id` field | `await repo.findByOrThrow({ userId }, 'X')` |

Helpers live in `src/common/helpers/` (barrel: `@/common/helpers`).
`PasswordService` is in `src/common/services/` (global via `CommonModule`).

### 2. Use mappers. Don't inline DTO mapping.

If you find yourself writing the same object literal twice when shaping an
entity into a response, extract a mapper.

- Pattern: `src/<module>/mappers/<entity>.mapper.ts`
- Examples: `UserMapper.toAuthResponse(user, accessToken, refreshToken)`,
  `BidMapper.toDashboardItem(bid)`, `JobMapper.mapJobsToUnifiedList(...)`.

### 3. Use enums, never magic strings.

`JobStatus.OPEN` not `'open'`. `BidStatus.PENDING` not `'pending'`.
`UserRole.CUSTOMER` not `'customer'`. Enums live in `src/common/enums/`.

This applies to **repositories too** — including inside `prisma.$transaction`
callbacks.

### 4. Respect the layering.

```
Controller  →  Service  →  Repository  →  ORMAdapter / Prisma
                    ↑
                  helpers, mappers, exceptions (cross-cutting)
```

- **Services** orchestrate business logic. They MUST NOT call `this.prisma.*`.
  If you need a new query, add a method to the relevant repository.
- **Repositories** own data access. They MUST NOT contain business decisions.
  Exception: multi-table transactions that the domain requires atomically
  (e.g. `acceptBidWithTransaction`). These exist by design — do not grow them
  with new business rules; new logic belongs in a service that calls smaller
  repo methods inside `prisma.$transaction`.
- **Controllers** are thin. Validate via DTOs and delegate. No business logic.
- **`Dashboard*` was the canary**: it used to call Prisma directly. It now
  goes through repositories. Keep it that way.

### 5. DTOs: one class per file, barrel re-export.

```
src/<module>/dto/
├── create-<entity>.dto.ts
├── update-<entity>.dto.ts
├── <entity>-response.dto.ts
├── <entity>.dto.ts     # legacy barrel — re-exports the above (do not delete)
└── index.ts            # canonical barrel for new imports
```

The legacy `<entity>.dto.ts` barrel exists so existing imports
(`from './dto/auth.dto'`) keep working. For new code, prefer
`from './dto'` (the `index.ts` barrel).

### 6. Config & secrets.

- TTLs, ports, secrets, origins → `ConfigService.get(...)` with a named
  constant fallback. Never `process.env.X || 'magic-string'` inline in
  business code. Bootstrap-only code (`main.ts`) can read `process.env`
  directly.
- Known keys: `AUTH_ACCESS_TOKEN_TTL`, `AUTH_REFRESH_TOKEN_TTL`,
  `BCRYPT_ROUNDS`, `CORS_ORIGINS`, `JWT_SECRET`, `DATABASE_URL`, `PORT`.

### 7. Pagination contract.

All paginated list endpoints return:
```ts
{ data: T[], pagination: { page, pageSize, total, totalPages } }
```
Built by `PaginationHelper.buildResponse(...)`. Query inputs go through
`PaginationQueryDto` (`src/common/dto/pagination-query.dto.ts`) — it caps
`pageSize` and validates that `page >= 1`.

### 8. Exceptions.

Throw from `src/common/exceptions/index.ts`, not raw `HttpException`:
`UserAlreadyExistsException`, `InvalidCredentialsException`,
`ResourceNotFoundException`, `UnauthorizedActionException`,
`ProviderProfileRequiredException`, `InvalidJobStatusException`,
`CannotBidOnOwnJobException`, `BidAlreadyExistsException`.

Add a new one to the index file if a recurring case doesn't fit.

---

## Where new code goes

| Adding... | Put it in |
|---|---|
| A reusable pure helper (no DI) | `src/common/helpers/<name>.helper.ts` + export from `helpers/index.ts` |
| A reusable injectable service | `src/common/services/<name>.service.ts` + register in `CommonModule` |
| Entity → response DTO transformation | `src/<module>/mappers/<entity>.mapper.ts` |
| A new query | A method on the relevant repository under `src/repositories/` |
| A new business rule | The corresponding service under `src/<module>/` |
| A new DTO | A new file in `src/<module>/dto/`, re-export from both `<entity>.dto.ts` and `index.ts` |
| A shared DTO (used across modules) | `src/common/dto/` |
| A new enum value | `src/common/enums/index.ts` |

---

## Guardrails (verify before merging)

These should each return **zero hits** in `src/`:

```bash
grep -rn "(page - 1) \* pageSize" src/ | grep -v "pagination.helper.ts"
grep -rn "Math.ceil(total / pageSize)" src/ | grep -v "pagination.helper.ts"
grep -rn "bcrypt\." src/ | grep -v "password.service.ts"
grep -rn "this.prisma\." src/dashboard/
grep -rn "'open'\|'assigned'\|'cancelled'\|'pending'\|'accepted'\|'rejected'\|'withdrawn'" src/ \
  | grep -vE "(common/enums|\.dto\.ts|@ApiProperty|example:|interceptor)"
```

If any of these grow new hits, the refactor is regressing — fix before merge.

---

## Commands

```bash
npm run start:dev     # dev server with hot reload
npm run build         # type-check + compile
npm run lint          # eslint (currently broken on main — needs eslint-plugin-prettier)
npm run prisma:studio # GUI for the DB
npm run seed          # seed service categories
```

---

## Messaging module (added May 2026)

### REST endpoints

| Method | Path | Auth | Description |
|---|---|---|---|
| `POST` | `/conversations` | JWT | Get-or-create conversation for a job (`{ jobId, recipientId }`) |
| `GET` | `/conversations` | JWT | List all conversations for the current user (with `lastMessage`, `unreadCount`, `otherUser`) |
| `GET` | `/conversations/:id/messages` | JWT | Cursor-paginated messages — `?limit=30`, `?before=<msgId>`, `?after=<msgId>` — ascending order |
| `POST` | `/conversations/:id/messages` | JWT | Send a message (`{ messageText }`) |
| `GET` | `/messages/unread-count` | JWT | Total unread count across all conversations `{ count }` |
| `POST` | `/messages/:id/read` | JWT | Mark a message as read |

Authorization rules:
- `POST /conversations` — caller must be the job's customer **or** the assigned provider (`job.assignedProviderId`). Returns 403 otherwise.
- `GET/POST .../messages` — caller must be a participant (`customerId` or `providerId`). Returns 403 otherwise.
- Conversations are **also** auto-created inside `BidRepository.acceptBidWithTransaction` when a bid is accepted — the endpoint is idempotent (upsert by `jobId`).

### Socket.IO gateway

- **Namespace**: `/ws`
- **Auth**: pass JWT in `socket.handshake.auth.token` on connect. Invalid/missing token → socket is disconnected immediately.
- **Auto-joined room on connect**: `user:<userId>` — receives `unread:changed` events.

| Client event (emit) | Payload | Effect |
|---|---|---|
| `conversation:join` | `{ conversationId }` | Joins `conversation:<id>` room (verified participant only) |
| `conversation:leave` | `{ conversationId }` | Leaves the room |

| Server event (listen) | Payload | When |
|---|---|---|
| `message:new` | `Message` object | After `POST .../messages` succeeds |
| `message:read` | `{ messageId, readerId }` | After `POST /messages/:id/read` succeeds |
| `unread:changed` | `{ count }` | After any send or mark-read that changes the recipient's unread total |

### Key files

| File | Role |
|---|---|
| `src/messages/messages.gateway.ts` | Socket.IO gateway — JWT handshake, room management, emit helpers |
| `src/messages/messages.service.ts` | Business logic — orchestrates repos + gateway emits |
| `src/messages/messages.controller.ts` | Two controllers: `MessagesController` (`/conversations`) + `MessageActionsController` (`/messages`) |
| `src/repositories/conversation.repository.ts` | Prisma-direct repo — `upsertByJobId`, `findManyForUser` (with `_count` unread), `isParticipant` |
| `src/auth/auth.module.ts` | Exports `JwtModule` so `MessagesModule` can inject `JwtService` into the gateway |
| `src/main.ts` | Uses `IoAdapter` from `@nestjs/platform-socket.io` |

### Installed packages (added)
- `@nestjs/websockets@10`
- `@nestjs/platform-socket.io@10`
- `socket.io`

---

## Things to leave alone unless explicitly asked

- The commented-out `ProvidersService` dependency in `BidsService` — disabling
  the provider-profile gate is a product decision, not a refactor.
- `acceptBidWithTransaction` in `BidRepository` — the 5-table transaction lives
  here by design. Splitting it requires a `BidAcceptanceService` and is its own PR.
- The legacy `<entity>.dto.ts` barrel files — they preserve import paths.
  Don't delete or "tidy up" by removing them.
