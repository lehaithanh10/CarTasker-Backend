# CarTasker Backend - Complete File Index

This document provides a quick reference for all files created in the CarTasker backend project.

---

## 📖 Documentation Files

| File | Purpose | Read Time |
|------|---------|-----------|
| [GETTING-STARTED.md](GETTING-STARTED.md) | **START HERE** - Quick setup & overview | 5 min |
| [README.md](README.md) | Complete API documentation & features | 20 min |
| [SETUP.md](SETUP.md) | Detailed installation & troubleshooting | 15 min |
| [STRUCTURE.md](STRUCTURE.md) | Project structure & architecture | 15 min |
| [API-TESTING.md](API-TESTING.md) | Example API requests & responses | 10 min |
| [FILE-INDEX.md](FILE-INDEX.md) | This file - all source files |  |

---

## ⚙️ Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies & npm scripts |
| `tsconfig.json` | TypeScript compiler configuration |
| `nest-cli.json` | NestJS CLI configuration |
| `.prettierrc` | Code formatting rules |
| `.eslintrc.js` | Linting configuration |
| `.gitignore` | Git ignore patterns |
| `.env.example` | Environment variables template |

---

## 🔐 Authentication Module (`src/auth/`)

| File | Purpose |
|------|---------|
| `auth.service.ts` | Authentication business logic (register, login, token generation) |
| `auth.controller.ts` | Auth endpoints (POST /register, POST /login, GET /me) |
| `auth.module.ts` | Auth module configuration with JWT & Passport |
| `dto/auth.dto.ts` | DTOs: RegisterDto, LoginDto, AuthResponseDto |
| `strategies/jwt.strategy.ts` | Passport JWT authentication strategy |

**Key Features:**
- User registration with bcrypt password hashing
- JWT token generation (24h expiration)
- Login with email/password verification
- Get current user endpoint with JWT guard

---

## 👤 Users Module (`src/users/`)

| File | Purpose |
|------|---------|
| `users.service.ts` | User profile management service |
| `users.controller.ts` | User endpoints (GET /me, PATCH /me, PATCH /me/password) |
| `users.module.ts` | Users module configuration |
| `dto/user.dto.ts` | DTOs: UpdateUserDto, UpdatePasswordDto, UserResponseDto |

**Key Features:**
- Get user profile
- Update user profile (name, phone, avatar)
- Change password
- Password verification with bcrypt

---

## 🔧 Providers Module (`src/providers/`)

| File | Purpose |
|------|---------|
| `providers.service.ts` | Provider profile & services management |
| `providers.controller.ts` | Provider endpoints (profile CRUD, services) |
| `providers.module.ts` | Providers module configuration |
| `dto/provider.dto.ts` | DTOs for profile & services |

**Key Features:**
- Create/update provider profile (business info)
- Get provider details with services
- Update service categories (multi-select)
- Profile verification tracking

---

## 📂 Categories Module (`src/categories/`)

| File | Purpose |
|------|---------|
| `categories.service.ts` | Service categories retrieval |
| `categories.controller.ts` | GET /categories endpoint |
| `categories.module.ts` | Categories module configuration |

**Key Features:**
- List all service categories
- 7 predefined categories (seeded)
- Public endpoint (no auth required)

---

## 💼 Jobs Module (`src/jobs/`)

| File | Purpose |
|------|---------|
| `jobs.service.ts` | Job posting & management logic |
| `jobs.controller.ts` | Job endpoints (CRUD, cancel, complete) |
| `jobs.module.ts` | Jobs module configuration |
| `dto/job.dto.ts` | DTOs: CreateJobDto, UpdateJobDto, JobResponseDto |

**Key Features:**
- Create job with details (title, description, location, category, date)
- List jobs with filters (status, category, location, pagination)
- Update job (customer only, open jobs only)
- Cancel job (customer only)
- Complete job (customer or assigned provider)
- Job status tracking (open → assigned → completed/cancelled)
- Status history recording

---

## 💰 Bids Module (`src/bids/`)

| File | Purpose |
|------|---------|
| `bids.service.ts` | Bidding system with transaction logic |
| `bids.controller.ts` | Bid endpoints (create, list, accept, reject, withdraw) |
| `bids.module.ts` | Bids module configuration |
| `dto/bid.dto.ts` | DTOs for bids |

**Key Features:**
- Create bid on job (provider only)
- Provider profile requirement validation
- Prevent self-bidding
- View bids for job (customer only)
- Withdraw bid (provider, pending only)
- **Accept bid with transaction:**
  - Mark selected bid as accepted
  - Reject other pending bids
  - Update job status to assigned
  - Create job assignment
  - Create conversation for messaging
  - Record status history
- Reject bid (customer)

---

## 💬 Messages Module (`src/messages/`)

| File | Purpose |
|------|---------|
| `messages.service.ts` | Messaging & conversation service |
| `messages.controller.ts` | Message endpoints (conversations, messages) |
| `messages.module.ts` | Messages module configuration |
| `dto/message.dto.ts` | DTOs: CreateMessageDto, MessageResponseDto |

**Key Features:**
- Get all conversations for user
- Get conversation details
- Get messages for conversation
- Send message (participants only)
- Mark message as read
- Conversation access control
- Message ordering by time

---

## 📊 Dashboard Module (`src/dashboard/`)

| File | Purpose |
|------|---------|
| `dashboard.service.ts` | Dashboard statistics service |
| `dashboard.controller.ts` | Dashboard endpoints |
| `dashboard.module.ts` | Dashboard module configuration |
| `dto/dashboard.dto.ts` | Dashboard response DTOs |

**Key Features:**
- **Customer Dashboard:**
  - Open jobs count
  - Assigned jobs count
  - Completed jobs count
  - Recent open jobs (top 5)
- **Provider Dashboard:**
  - Available jobs count
  - Pending bids count
  - Assigned jobs count
  - Completed jobs count
  - Recent bids (top 5)

---

## 🛡️ Common Module (`src/common/`)

### Decorators (`src/common/decorators/`)

| File | Purpose |
|------|---------|
| `current-user.decorator.ts` | @CurrentUser - Extract user from request |
| `roles.decorator.ts` | @Roles - Specify required roles |
| `index.ts` | Decorators export |

### Guards (`src/common/guards/`)

| File | Purpose |
|------|---------|
| `jwt-auth.guard.ts` | JwtAuthGuard - Validate JWT token |
| `roles.guard.ts` | RolesGuard - Check user role against required roles |
| `index.ts` | Guards export |

### Exceptions (`src/common/exceptions/`)

| File | Purpose |
|------|---------|
| `index.ts` | Custom exception classes with HTTP status codes |

**Exceptions:**
- UserAlreadyExistsException (409)
- InvalidCredentialsException (401)
- ResourceNotFoundException (404)
- UnauthorizedActionException (403)
- ProviderProfileRequiredException (400)
- InvalidJobStatusException (400)
- CannotBidOnOwnJobException (400)
- BidAlreadyExistsException (400)

### Enums (`src/common/enums/`)

| File | Purpose |
|------|---------|
| `index.ts` | Enums for application logic |

**Enums:**
- UserRole: customer, provider, admin
- JobStatus: open, assigned, completed, cancelled
- BidStatus: pending, accepted, rejected, withdrawn

---

## 💾 Prisma Module (`src/prisma/`)

| File | Purpose |
|------|---------|
| `prisma.service.ts` | Prisma client service with connection hooks |
| `prisma.module.ts` | Prisma module (globally exported) |

---

## 🎯 Application Root

| File | Purpose |
|------|---------|
| `app.module.ts` | Root application module importing all feature modules |
| `main.ts` | Application bootstrap with Swagger setup & server initialization |

---

## 📦 Prisma Database

| File | Purpose |
|------|---------|
| `prisma/schema.prisma` | Database schema (11 models) |
| `prisma/seed.ts` | Database seeding script (7 service categories) |

---

## 📋 Quick Reference

### Total Files Created

- 🔐 **Auth Module**: 5 files (service, controller, module, dto, strategy)
- 👤 **Users Module**: 4 files
- 🔧 **Providers Module**: 4 files
- 📂 **Categories Module**: 3 files
- 💼 **Jobs Module**: 4 files
- 💰 **Bids Module**: 4 files
- 💬 **Messages Module**: 4 files
- 📊 **Dashboard Module**: 4 files
- 🛡️ **Common Module**: 5 files (decorators, guards, exceptions, enums)
- 💾 **Prisma**: 4 files (service, module, schema, seed)
- 🎯 **Root**: 2 files (app.module, main)
- ⚙️ **Config**: 14 files (package.json, tsconfig, .prettierrc, .eslintrc, .gitignore, .env.example, etc.)
- 📖 **Documentation**: 6 files (README, SETUP, STRUCTURE, GETTING-STARTED, API-TESTING, this file)

**Total: 67 files**

---

## 🗺️ Navigation Guide

### For Setup
1. Start: [GETTING-STARTED.md](GETTING-STARTED.md)
2. Detailed Setup: [SETUP.md](SETUP.md)

### For API Use
1. Full Docs: [README.md](README.md)
2. Examples: [API-TESTING.md](API-TESTING.md)

### For Code Review
1. Structure: [STRUCTURE.md](STRUCTURE.md)
2. Source Code: `src/` directory

### For Configuration
1. Environment: `.env.example` → copy to `.env`
2. Dependencies: `package.json`
3. TypeScript: `tsconfig.json`

---

## 🚀 Common Tasks

### Setup & Run
```bash
npm install                      # Install dependencies
cp .env.example .env            # Create .env
npm run prisma:generate         # Generate Prisma client
npm run prisma:migrate          # Create database tables
npm run seed                    # Populate categories
npm run start:dev               # Start development server
```

### Development
```bash
npm run format                  # Format code with Prettier
npm run lint                    # Run ESLint
npm run test                    # Run tests
npm run prisma:studio           # Open database GUI
```

### Database
```bash
npm run prisma:generate         # Generate Prisma client
npm run prisma:migrate          # Run migrations
npm run prisma:migrate:deploy   # Deploy migrations (production)
npm run seed                    # Run seed script
```

--

## 📊 Architecture Highlights

### Modules (9 feature modules)
Each module is self-contained with:
- Service (business logic)
- Controller (HTTP endpoints)
- DTO (data transfer objects)
- Module (configuration)

### Layers
- **Controllers**: HTTP routing & validation
- **Services**: Business logic & database operations
- **DTOs**: Input/output validation
- **Guards**: Authentication & authorization
- **Decorators**: Metadata & parameter extraction
- **Exceptions**: Custom error handling
- **Enums**: Type-safe constants

### Database
- **11 Models**: Users, Profiles, Categories, Services, Jobs, Bids, Assignments, Conversations, Messages, History
- **Transactions**: Atomic operations for bid acceptance
- **Relations**: Proper foreign keys & cascading

---

## ✅ Production Features

- ✅ Role-based access control (RBAC)
- ✅ JWT authentication
- ✅ Bcrypt password hashing
- ✅ Request validation
- ✅ Error handling
- ✅ Logging support
- ✅ CORS configuration
- ✅ API versioning (/api/v1)
- ✅ Swagger documentation
- ✅ Environment variables
- ✅ Transaction support
- ✅ Modular architecture
- ✅ TypeScript strict mode
- ✅ Code formatting
- ✅ Linting

---

## 🎓 Code Quality

- **TypeScript**: Full type safety
- **Validation**: class-validator on all inputs
- **Error Handling**: Custom exceptions with appropriate status codes
- **Code Style**: Prettier + ESLint
- **Architecture**: Clean, modular, separation of concerns
- **Scalability**: Ready for feature expansion
- **Documentation**: Swagger + inline comments

---

**Start with [GETTING-STARTED.md](GETTING-STARTED.md) to get up and running in 5 minutes!** 🚀
