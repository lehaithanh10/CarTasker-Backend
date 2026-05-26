# CLAUDE.md

Guidance for AI assistants working in this repo. Read this **before** making changes.

For human onboarding (setup, env vars, db, endpoints), see `README.md`, `SETUP.md`,
`GETTING-STARTED.md`, `STRUCTURE.md`, `FILE-INDEX.md`, `API-TESTING.md`.

---

## Project at a glance

NestJS + TypeScript + Prisma + PostgreSQL backend for CarTasker (mobile car
services marketplace).

**Modules:** `auth`, `users`, `providers`, `categories`, `jobs`, `bids`,
`messages`, `dashboard`, plus `common` and `repositories`.

**Current JobStatus values:** `open` → `assigned` → `awaiting_customer_confirmation` → `completed`
(or `disputed` if customer raises an issue; `cancelled` from `open`).

---

## Architecture rules (do NOT regress)

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
  (e.g. `acceptBidWithTransaction`, `requestCompletionWithTransaction`).
  These exist by design — do not grow them with new business rules; new logic
  belongs in a service that calls smaller repo methods inside `prisma.$transaction`.
- **Controllers** are thin. Validate via DTOs and delegate. No business logic.
- **Event publishers** (`JobEventsPublisher`) are called from **services only** —
  never from repositories or controllers.

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
(`from './dto/job.dto'`) keep working. For new code, prefer
`from './dto'` (the `index.ts` barrel).

### 6. Config & secrets.

- TTLs, ports, secrets, origins → `ConfigService.get(...)` with a named
  constant fallback. Never `process.env.X || 'magic-string'` inline in
  business code. Bootstrap-only code (`main.ts`) can read `process.env` directly.
- **Known env keys:**

| Key | Default | Used in |
|---|---|---|
| `JWT_SECRET` | — | `AuthModule` |
| `AUTH_ACCESS_TOKEN_TTL` | `'24h'` | `AuthService` |
| `AUTH_REFRESH_TOKEN_TTL` | `'7d'` | `AuthService` |
| `BCRYPT_ROUNDS` | `10` | `PasswordService` |
| `CORS_ORIGINS` | `''` | `main.ts` bootstrap |
| `DATABASE_URL` | — | Prisma |
| `PORT` | `8000` | `main.ts` bootstrap |
| `AUTO_RELEASE_HOURS` | `48` | `JobsService.requestCompletion` |

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

| Adding… | Put it in |
|---|---|
| A reusable pure helper (no DI) | `src/common/helpers/<name>.helper.ts` + export from `helpers/index.ts` |
| A reusable injectable service | `src/common/services/<name>.service.ts` + register in `CommonModule` |
| A domain lifecycle event publisher | Extend `JobEventsPublisher` (`src/common/services/job-events.publisher.ts`); bind real implementation in your module; default Noop is in `CommonModule` |
| Entity → response DTO transformation | `src/<module>/mappers/<entity>.mapper.ts` |
| A new query | A method on the relevant repository under `src/repositories/` |
| A new business rule | The corresponding service under `src/<module>/` |
| A new DTO | A new file in `src/<module>/dto/`, re-export from both `<entity>.dto.ts` and `index.ts` |
| A shared DTO (used across modules) | `src/common/dto/` |
| A new enum value | `src/common/enums/index.ts` |
| A scheduled task (cron) | `src/<module>/<name>.scheduler.ts` + register in module; add `ScheduleModule.forRoot()` to the module's imports if not already present |

---

## Guardrails (verify before merging)

These should each return **zero hits** in `src/`:

```bash
# No inline pagination math
grep -rn "(page - 1) \* pageSize" src/ | grep -v "pagination.helper.ts"
grep -rn "Math.ceil(total / pageSize)" src/ | grep -v "pagination.helper.ts"

# No direct bcrypt calls
grep -rn "bcrypt\." src/ | grep -v "password.service.ts"

# Dashboard must not call Prisma directly
grep -rn "this.prisma\." src/dashboard/

# No magic status strings (enums only)
grep -rn "'open'\|'assigned'\|'awaiting_customer_confirmation'\|'completed'\|'cancelled'\|'disputed'\|'pending'\|'accepted'\|'rejected'\|'withdrawn'" src/ \
  | grep -vE "(common/enums|\.dto\.ts|@ApiProperty|example:|schema\.prisma|migration)"

# Event publishing must not happen from repositories
grep -rn "events\.publish\|jobEvents\." src/repositories/

# Jobs service must not call Prisma directly
grep -rn "this\.prisma\." src/jobs/
```

If any of these grow new hits, the refactor is regressing — fix before merge.

---

## Commands

```bash
npm run start:dev        # dev server with hot reload
npm run build            # type-check + compile
npm run lint             # eslint (currently broken on main — needs eslint-plugin-prettier)
npm run prisma:migrate   # create + apply a new DB migration (dev)
npm run prisma:studio    # GUI for the DB
npm run seed             # seed service categories
```

---

## All API endpoints (current)

### Auth
| Method | Path | Auth | Notes |
|---|---|---|---|
| `POST` | `/auth/register` | Public | |
| `POST` | `/auth/login` | Public | |
| `GET` | `/auth/me` | JWT | |

### Users
| Method | Path | Auth | Notes |
|---|---|---|---|
| `GET` | `/users/me` | JWT | |
| `PATCH` | `/users/me` | JWT | |
| `PATCH` | `/users/me/password` | JWT | |

### Providers
| Method | Path | Auth | Notes |
|---|---|---|---|
| `GET` | `/providers/:providerId` | Public | |
| `POST` | `/providers/profile` | Provider | Create or update profile |
| `PATCH` | `/providers/profile` | Provider | Update profile fields |

> ⚠️ `PUT /providers/services` is **not yet implemented**. The DTO (`UpdateProviderServicesDto`) and DB table (`provider_services`) exist but there is no controller route or service method. This is a known gap — do not assume it works.

### Categories
| Method | Path | Auth | Notes |
|---|---|---|---|
| `GET` | `/categories` | Public | |

### Jobs
| Method | Path | Auth | Notes |
|---|---|---|---|
| `POST` | `/jobs` | Customer | |
| `GET` | `/jobs` | Public | Filters: `status`, `title`, `categoryId`, `suburb`, `state`, `page`, `pageSize` |
| `GET` | `/jobs/:jobId` | JWT | Provider response includes `myBid`, `otherBidsCount`, `lowestBidAmount` |
| `PATCH` | `/jobs/:jobId` | Customer | Only when `OPEN` |
| `POST` | `/jobs/:jobId/cancel` | Customer | Only when `OPEN` |
| `POST` | `/jobs/:jobId/complete/request` | Provider | `ASSIGNED → AWAITING_CUSTOMER_CONFIRMATION` |
| `POST` | `/jobs/:jobId/complete/confirm` | Customer | `AWAITING_… → COMPLETED` |
| `POST` | `/jobs/:jobId/complete` | Customer | Shortcut: `ASSIGNED or AWAITING_… → COMPLETED` |
| `POST` | `/jobs/:jobId/dispute` | Customer | `AWAITING_… → DISPUTED` — body `{ reason: string }` |
| `GET` | `/jobs/customer/:customerId` | Public | Paginated jobs for a customer |

### Bids
| Method | Path | Auth | Notes |
|---|---|---|---|
| `POST` | `/jobs/:jobId/bids` | Provider | |
| `GET` | `/jobs/:jobId/bids` | Customer only | |
| `PATCH` | `/bids/:bidId` | Provider | Update bid amount/message |
| `POST` | `/bids/:bidId/withdraw` | Provider | |
| `POST` | `/bids/:bidId/accept` | Customer | Atomic 5-table transaction |
| `POST` | `/bids/:bidId/reject` | Customer | |

### Messages
| Method | Path | Auth | Notes |
|---|---|---|---|
| `POST` | `/conversations` | JWT | Body `{ jobId, recipientId }` — idempotent upsert |
| `GET` | `/conversations` | JWT | With `lastMessage`, `unreadCount`, `otherUser` |
| `GET` | `/conversations/:id/messages` | JWT | Cursor pagination: `?limit`, `?before`, `?after` |
| `POST` | `/conversations/:id/messages` | JWT | Body field is `messageText` not `text` |
| `GET` | `/messages/unread-count` | JWT | `{ count }` |
| `POST` | `/messages/:id/read` | JWT | |

### Dashboard
| Method | Path | Auth | Notes |
|---|---|---|---|
| `GET` | `/dashboard/customer` | Customer | |
| `GET` | `/dashboard/provider` | Provider | |

---

## Job completion flow

### State machine

```
OPEN ──(customer accepts bid)──▶ ASSIGNED
                                    │
         (provider) /complete/request │──▶ AWAITING_CUSTOMER_CONFIRMATION
                                          │
             (customer) /complete/confirm │──▶ COMPLETED  ← job.completed emitted
             (customer) /dispute          │──▶ DISPUTED   ← job.disputed emitted
             (cron auto-release, 48 h)    │──▶ COMPLETED  ← job.completed emitted (source: auto-release)

ASSIGNED ──(customer) /complete ──▶ COMPLETED  (shortcut, job.completed emitted source: customer-shortcut)
OPEN     ──(customer) /cancel   ──▶ CANCELLED
```

### Key files

| File | Role |
|---|---|
| `src/common/enums/index.ts` | `JobStatus` enum — all status values live here |
| `src/common/services/job-events.publisher.ts` | Abstract `JobEventsPublisher` + `JobLifecycleEvent` union |
| `src/common/services/job-events.publisher.noop.ts` | Default Noop (Logger.debug); real publishers injected by future payment/notification modules |
| `src/jobs/jobs.service.ts` | `requestCompletion`, `confirmCompletion`, `disputeCompletion`, `autoReleaseExpiredCompletions` |
| `src/jobs/completion-auto-release.scheduler.ts` | `@Cron(EVERY_10_MINUTES)` → calls `autoReleaseExpiredCompletions()` |
| `src/jobs/dto/dispute-job.dto.ts` | `DisputeJobDto` — validates `reason` (10–500 chars) |
| `src/repositories/job.repository.ts` | `requestCompletionWithTransaction`, `confirmCompletionWithTransaction`, `disputeWithTransaction`, `findExpiredAwaitingJobs` |

### Auto-release window
`ConfigService.get<number>('AUTO_RELEASE_HOURS', 48)` — set `AUTO_RELEASE_HOURS` in `.env` to override.

### Payment + notification hooks (not yet wired)
The `JobEventsPublisher` emits `job.completion-requested`, `job.completed`, `job.disputed`.
To add a real handler:
1. Create a service that extends `JobEventsPublisher` and implement `publish()`.
2. Override the DI binding in your module: `{ provide: JobEventsPublisher, useClass: MyRealPublisher }`.
3. The completion service stays untouched — it only calls `events.publish(...)`.

---

## Messaging module

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
- `POST /conversations` — caller must be the job's customer **or** the assigned provider. Returns 403 otherwise.
- `GET/POST .../messages` — caller must be a participant (`customerId` or `providerId`). Returns 403 otherwise.
- `POST /messages/:id/read` — caller must be a participant in the message's conversation.
- Conversations are **also** auto-created inside `BidRepository.acceptBidWithTransaction` when a bid is accepted.

### Socket.IO gateway

- **Namespace**: `/ws`
- **Auth**: pass JWT in `socket.handshake.auth.token` on connect.
- **Auto-joined room on connect**: `user:<userId>` — receives `unread:changed` events.
- **CORS**: configured via `CorsIoAdapter` in `main.ts`, not on the `@WebSocketGateway()` decorator.

| Client event (emit) | Payload | Effect |
|---|---|---|
| `conversation:join` | `{ conversationId }` | Joins `conversation:<id>` room |
| `conversation:leave` | `{ conversationId }` | Leaves the room |

| Server event (listen) | Payload | When |
|---|---|---|
| `message:new` | `Message` object | After `POST .../messages` succeeds |
| `message:read` | `{ messageId, readerId }` | After `POST /messages/:id/read` succeeds |
| `unread:changed` | `{ count }` | After any send or mark-read that changes unread total |

### Key files

| File | Role |
|---|---|
| `src/messages/messages.gateway.ts` | Socket.IO gateway — JWT handshake, room management, emit helpers |
| `src/messages/messages.service.ts` | Business logic — orchestrates repos + gateway emits |
| `src/messages/messages.controller.ts` | `MessagesController` (`/conversations`) + `MessageActionsController` (`/messages`) |
| `src/messages/mappers/conversation.mapper.ts` | `ConversationMapper.toListItems(rows, viewerUserId)` — sorts by last-message timestamp |
| `src/repositories/conversation.repository.ts` | `upsertByJobId`, `findManyForUser`, `countUnreadForUser`, `isParticipant` |

### Installed packages
- `@nestjs/websockets@10`
- `@nestjs/platform-socket.io@10`
- `socket.io`
- `@nestjs/schedule` (used by completion auto-release scheduler)

---

## Things to leave alone unless explicitly asked

- The commented-out `ProvidersService` dependency in `BidsService` — disabling
  the provider-profile gate is a product decision, not a refactor.
- `acceptBidWithTransaction` in `BidRepository` — the 5-table transaction lives
  here by design. Splitting it requires a `BidAcceptanceService` and is its own PR.
- The legacy `<entity>.dto.ts` barrel files — they preserve import paths.
  Don't delete or "tidy up" by removing them.
- `PUT /providers/services` — the DTO exists but the endpoint is not implemented.
  Stub it out in a dedicated PR; don't bolt it onto unrelated work.
