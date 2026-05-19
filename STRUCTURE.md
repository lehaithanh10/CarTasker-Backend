# CarTasker Backend - Complete File Structure

## Project Overview

Complete NestJS backend for CarTasker marketplace application with full production-ready code.

---

## Complete File Tree

```
CarTaskers/
├── src/
│   ├── auth/
│   │   ├── auth.service.ts         # Auth business logic (register, login, token)
│   │   ├── auth.controller.ts      # Auth endpoints
│   │   ├── auth.module.ts          # Auth module configuration
│   │   ├── dto/
│   │   │   └── auth.dto.ts         # RegisterDto, LoginDto, AuthResponseDto
│   │   └── strategies/
│   │       └── jwt.strategy.ts     # Passport JWT strategy
│   │
│   ├── users/
│   │   ├── users.service.ts        # User profile service
│   │   ├── users.controller.ts     # User endpoints
│   │   ├── users.module.ts         # Users module
│   │   └── dto/
│   │       └── user.dto.ts         # UpdateUserDto, UpdatePasswordDto
│   │
│   ├── providers/
│   │   ├── providers.service.ts    # Provider profile management
│   │   ├── providers.controller.ts # Provider endpoints
│   │   ├── providers.module.ts     # Providers module
│   │   └── dto/
│   │       └── provider.dto.ts     # Provider DTOs (profile, services)
│   │
│   ├── categories/
│   │   ├── categories.service.ts   # Service categories logic
│   │   ├── categories.controller.ts# Categories endpoints
│   │   ├── categories.module.ts    # Categories module
│   │   └── dto/
│   │       └── (implicit in response)
│   │
│   ├── jobs/
│   │   ├── jobs.service.ts         # Job management service
│   │   ├── jobs.controller.ts      # Job endpoints
│   │   ├── jobs.module.ts          # Jobs module
│   │   └── dto/
│   │       └── job.dto.ts          # CreateJobDto, UpdateJobDto, JobResponseDto
│   │
│   ├── bids/
│   │   ├── bids.service.ts         # Bidding system logic (with transactions)
│   │   ├── bids.controller.ts      # Bid endpoints
│   │   ├── bids.module.ts          # Bids module
│   │   └── dto/
│   │       └── bid.dto.ts          # CreateJobBidDto, JobBidResponseDto
│   │
│   ├── messages/
│   │   ├── messages.service.ts     # Messaging service
│   │   ├── messages.controller.ts  # Message endpoints
│   │   ├── messages.module.ts      # Messages module
│   │   └── dto/
│   │       └── message.dto.ts      # CreateMessageDto, MessageResponseDto
│   │
│   ├── dashboard/
│   │   ├── dashboard.service.ts    # Dashboard statistics
│   │   ├── dashboard.controller.ts # Dashboard endpoints
│   │   ├── dashboard.module.ts     # Dashboard module
│   │   └── dto/
│   │       └── dashboard.dto.ts    # DashboardDto classes
│   │
│   ├── common/
│   │   ├── decorators/
│   │   │   ├── current-user.decorator.ts  # @CurrentUser decorator
│   │   │   ├── roles.decorator.ts         # @Roles decorator
│   │   │   └── index.ts                   # Decorators export
│   │   │
│   │   ├── guards/
│   │   │   ├── jwt-auth.guard.ts          # JWT authentication guard
│   │   │   ├── roles.guard.ts             # Role-based authorization guard
│   │   │   └── index.ts                   # Guards export
│   │   │
│   │   ├── exceptions/
│   │   │   └── index.ts                   # Custom exception classes
│   │   │       ├── UserAlreadyExistsException
│   │   │       ├── InvalidCredentialsException
│   │   │       ├── ResourceNotFoundException
│   │   │       ├── UnauthorizedActionException
│   │   │       ├── ProviderProfileRequiredException
│   │   │       ├── InvalidJobStatusException
│   │   │       ├── CannotBidOnOwnJobException
│   │   │       └── BidAlreadyExistsException
│   │   │
│   │   └── enums/
│   │       └── index.ts                   # Enums
│   │           ├── UserRole (customer, provider, admin)
│   │           ├── JobStatus (open, assigned, completed, cancelled)
│   │           └── BidStatus (pending, accepted, rejected, withdrawn)
│   │
│   ├── prisma/
│   │   ├── prisma.service.ts       # Prisma ORM service
│   │   └── prisma.module.ts        # Prisma module
│   │
│   ├── app.module.ts               # Root application module
│   └── main.ts                     # Application bootstrap & Swagger setup
│
├── prisma/
│   ├── schema.prisma               # Database schema (11 models)
│   └── seed.ts                     # Database seeding script
│
├── package.json                    # Dependencies & scripts
├── tsconfig.json                   # TypeScript configuration
├── nest-cli.json                   # NestJS CLI configuration
├── .prettierrc                     # Code formatting rules
├── .eslintrc.js                    # Linting rules
├── .gitignore                      # Git ignore patterns
├── .env.example                    # Environment variables template
├── README.md                       # Full documentation
├── SETUP.md                        # Setup instructions
└── STRUCTURE.md                    # This file
```

---

## Database Schema (Prisma Models)

### 1. **User** - Platform users
- id (UUID, primary)
- email (unique)
- passwordHash
- fullName
- phone (optional)
- role (customer | provider | admin)
- avatarUrl (optional)
- isActive (default: true)
- createdAt, updatedAt
- Relations: providerProfile, jobs, bids, conversations, messages, assignments

### 2. **ProviderProfile** - Service provider details
- id (UUID, primary)
- userId (unique, FK)
- businessName (optional)
- bio (optional)
- yearsExperience (optional)
- serviceAreaText (optional)
- suburb, state (optional)
- isVerified (default: false)
- createdAt, updatedAt
- Relation: user

### 3. **ServiceCategory** - Service types
- id (UUID, primary)
- name (unique)
- slug (unique)
- isActive (default: true)
- createdAt
- Relations: providerServices, jobs

### 4. **ProviderService** - Provider ↔ Category mapping
- id (UUID, primary)
- providerId (FK)
- categoryId (FK)
- createdAt
- Unique: (providerId, categoryId)
- Relations: provider, category

### 5. **Job** - Service job postings
- id (UUID, primary)
- customerId (FK)
- categoryId (FK)
- title
- description
- locationText
- suburb, state (optional)
- latitude, longitude (optional)
- preferredDate (optional)
- status (open | assigned | completed | cancelled)
- assignedProviderId (optional, FK)
- createdAt, updatedAt
- Relations: customer, category, assignedProvider, bids, assignment, conversation, statusHistory

### 6. **JobBid** - Provider bids on jobs
- id (UUID, primary)
- jobId (FK)
- providerId (FK)
- bidAmount (optional)
- message (optional)
- estimatedArrivalHours (optional)
- status (pending | accepted | rejected | withdrawn)
- createdAt, updatedAt
- Unique: (jobId, providerId)
- Relations: job, provider, assignment

### 7. **JobAssignment** - Accepted bid & job assignment
- id (UUID, primary)
- jobId (unique, FK)
- customerId (FK)
- providerId (FK)
- acceptedBidId (optional, FK)
- assignedAt
- completedAt (optional)
- Relations: job, customer, provider, acceptedBid

### 8. **Conversation** - Messaging channel
- id (UUID, primary)
- jobId (unique, FK)
- customerId (FK)
- providerId (FK)
- createdAt
- Relations: job, customer, provider, messages

### 9. **Message** - Individual messages
- id (UUID, primary)
- conversationId (FK)
- senderId (FK)
- messageText
- isRead (default: false)
- createdAt
- Relations: conversation, sender

### 10. **JobStatusHistory** - Audit trail
- id (UUID, primary)
- jobId (FK)
- oldStatus (optional)
- newStatus
- changedBy (optional, FK)
- note (optional)
- createdAt
- Relations: job, changedByUser

---

## Module Organization

### **Auth Module**
- Registration with email/password
- Login with JWT token
- Get current user
- JWT strategy for Passport authentication

### **Users Module**
- Get user profile
- Update user profile
- Update password
- User data management

### **Providers Module**
- Create/update provider profile
- Get provider details
- Set service categories
- Provider verification tracking

### **Categories Module**
- List all service categories
- Category retrieval
- 7 predefined categories (seeded)

### **Jobs Module**
- Create new job
- List jobs (with filters: status, category, location, pagination)
- Get job details
- Update job
- Cancel job
- Complete job
- Job status tracking

### **Bids Module**
- Create bid
- Get bids for job (customer only)
- Withdraw bid
- Accept bid (with Prisma transaction)
- Reject bid
- Bid management

### **Messages Module**
- Get conversations
- Get conversation details
- Get messages for conversation
- Send message
- Mark message as read
- Real-time messaging support ready

### **Dashboard Module**
- Customer dashboard (job counts, recent jobs)
- Provider dashboard (available jobs, bid counts, completed jobs)

### **Common Module**
- Decorators: @CurrentUser, @Roles
- Guards: JwtAuthGuard, RolesGuard
- Exceptions: Custom error classes
- Enums: UserRole, JobStatus, BidStatus

---

## API Endpoints Summary (30 endpoints)

### Auth (3)
- POST /auth/register
- POST /auth/login
- GET /auth/me

### Users (3)
- GET /users/me
- PATCH /users/me
- PATCH /users/me/password

### Providers (4)
- GET /providers/:providerId
- POST /providers/profile
- PATCH /providers/profile
- PUT /providers/services

### Categories (1)
- GET /categories

### Jobs (6)
- POST /jobs
- GET /jobs
- GET /jobs/:jobId
- PATCH /jobs/:jobId
- POST /jobs/:jobId/cancel
- POST /jobs/:jobId/complete

### Bids (6)
- POST /jobs/:jobId/bids
- GET /jobs/:jobId/bids
- PATCH /bids/:bidId
- POST /bids/:bidId/withdraw
- POST /bids/:bidId/accept
- POST /bids/:bidId/reject

### Messages (5)
- GET /conversations
- GET /conversations/:conversationId
- GET /conversations/:conversationId/messages
- POST /conversations/:conversationId/messages
- POST /messages/:messageId/read

### Dashboard (2)
- GET /dashboard/customer
- GET /dashboard/provider

---

## Key Implementation Details

### Authentication & Authorization
- **JWT Tokens**: 24-hour expiration
- **Token Payload**: userId, email, role
- **Password Hashing**: bcrypt with salt rounds
- **Guards**: JwtAuthGuard (authentication), RolesGuard (authorization)
- **Decorators**: @CurrentUser, @Roles

### Data Validation
- **DTOs**: class-validator with decorators
- **Global Validation Pipe**: Whitelist, forbid unknown properties
- **Error Messages**: Detailed validation error responses
- **Type Transformation**: Automatic for query parameters

### Database Transactions
- **Bid Acceptance**: Atomicity ensured with `prisma.$transaction`
  - Accept selected bid
  - Reject other pending bids
  - Update job status
  - Create assignment
  - Create conversation
  - Record status history

### Error Handling
- Custom exceptions with appropriate HTTP status codes
- Meaningful error messages
- Structured error responses
- Exception factory in validation pipe

### API Documentation
- **Swagger/OpenAPI**: Auto-generated from code annotations
- **Base URL**: /api/v1
- **Docs**: /api/docs
- **Bearer Token Auth**: JWT in Authorization header

---

## Key Features

✅ Complete REST API with 30 endpoints
✅ Role-based access control (customer, provider, admin)
✅ JWT authentication & authorization
✅ PostgreSQL with Prisma ORM
✅ Data validation with class-validator
✅ Transaction support for critical operations
✅ Swagger API documentation
✅ Comprehensive error handling
✅ Modular architecture
✅ Environment variable configuration
✅ Database seeding
✅ Clean code structure

---

## Technology Versions

| Technology | Version |
|------------|---------|
| Node.js | 18+ |
| NestJS | ^10.2.10 |
| TypeScript | ^5.3.2 |
| Prisma | ^5.5.2 |
| PostgreSQL | 13+ |
| @nestjs/jwt | ^12.0.1 |
| @nestjs/passport | ^10.0.3 |
| @nestjs/swagger | ^7.1.11 |
| bcrypt | ^5.1.1 |
| class-validator | ^0.14.0 |

---

## Development Workflow

1. **Start the server**: `npm run start:dev`
2. **View API docs**: http://localhost:3000/api/docs
3. **Explore database**: `npm run prisma:studio`
4. **Run tests**: `npm run test`
5. **Format code**: `npm run format`
6. **Lint code**: `npm run lint`

---

## Production Deployment Ready

✅ Environment variable configuration
✅ Error handling and logging
✅ Data validation and sanitization
✅ Database transactions for consistency
✅ Role-based authorization
✅ API documentation (Swagger)
✅ Modular, scalable architecture
✅ Type-safe with TypeScript
✅ CORS configuration
✅ API versioning

---

## Next Steps

1. Review [SETUP.md](SETUP.md) for local setup
2. Read [README.md](README.md) for comprehensive documentation
3. Start development server: `npm run start:dev`
4. Test endpoints via Swagger: http://localhost:3000/api/docs
5. Explore Prisma Studio: `npm run prisma:studio`
6. Review core modules:
   - Auth for authentication
   - Bids for transaction handling
   - Messages for real-time features
