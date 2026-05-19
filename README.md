# CarTasker Backend API

A production-structured NestJS backend for a mobile car services marketplace platform similar to Airtasker, but specifically for car services.

## Project Overview

CarTasker is an MVP platform where:
- **Customers** can post car service jobs
- **Service Providers** (mechanics/technicians) can browse jobs, bid on them, and complete work
- **Messaging** enables communication between customers and providers
- **Job Management** tracks the entire lifecycle from posting to completion

## Tech Stack

- **Framework**: NestJS (Node.js backend framework)
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **Validation**: class-validator
- **API Documentation**: Swagger/OpenAPI
- **Password Hashing**: bcrypt

## Features

### Authentication
- User registration (customer/provider roles)
- User login with JWT tokens
- Current user profile retrieval

### Customer Features
- Create job requests with details (title, description, location, category, preferred date)
- View all own jobs
- Update or cancel open jobs
- View service providers bidding on jobs
- Accept or reject bids from providers
- Message assigned provider
- Mark jobs as complete

### Provider Features
- Create and manage provider profile
- Set service categories offered
- Browse available jobs
- Place bids on jobs with estimated times and messages
- Withdraw bids
- View bid status
- Message customers
- Mark jobs as complete

### Admin Features
- Basic support role (MVP phase)

### System Features
- 7 predefined service categories
- Job status tracking (open → assigned → completed/cancelled)
- Bid status management (pending → accepted/rejected/withdrawn)
- Real-time messaging between participants
- Job assignment with automated conversation creation
- Transaction-based bid acceptance for data consistency

## Prerequisites

- Node.js (v18.0.0 or higher)
- PostgreSQL (v13 or higher)
- npm or yarn

## Installation & Setup

### 1. Clone and Install Dependencies

```bash
cd /Users/haithanhle1510/Developers/CarTaskers
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/cartasker_dev"

# JWT
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
JWT_EXPIRATION="24h"

# Server
NODE_ENV="development"
PORT=3000

# API
API_VERSION="v1"
```

### 3. Set Up PostgreSQL Database

Create a PostgreSQL database:

```bash
createdb cartasker_dev
```

Or using psql:

```sql
CREATE DATABASE cartasker_dev;
```

### 4. Run Prisma Migrations

Generate Prisma client and run migrations:

```bash
npm run prisma:generate
npm run prisma:migrate
```

This creates all tables based on the schema defined in `prisma/schema.prisma`.

### 5. Seed the Database

Populate service categories and initial data:

```bash
npm run seed
```

This creates the 7 predefined service categories.

## Running the Application

### Development Mode

```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`
Swagger documentation at `http://localhost:3000/api/docs`

### Production Mode

Build and run:

```bash
npm run build
npm run start:prod
```

### Other Commands

```bash
# Format code
npm run format

# Run linter
npm run lint

# Run tests
npm run test

# Watch tests
npm run test:watch

# Coverage report
npm run test:cov

# Open Prisma Studio (GUI for database)
npm run prisma:studio
```

## Database Schema

### Core Tables

**users** - All platform users (customers, providers, admins)
- id, email, password_hash, full_name, phone, role, avatar_url, is_active, created_at, updated_at

**provider_profiles** - Extended profile info for service providers
- id, user_id, business_name, bio, years_experience, service_area_text, suburb, state, is_verified

**service_categories** - Predefined service types (7 categories)
- Car Service, Mobile Tyres, Mobile Detailing, Roadside Assistance, Mobile Batteries, Key Programming, Vehicle Inspection

**provider_services** - Many-to-many relationship between providers and service categories

**jobs** - Car service job postings
- id, customer_id, category_id, title, description, location_text, suburb, state, preferred_date, status, assigned_provider_id

**job_bids** - Bids placed by providers on jobs
- id, job_id, provider_id, bid_amount, message, estimated_arrival_hours, status

**job_assignments** - Records of accepted bids and job assignments
- id, job_id, customer_id, provider_id, accepted_bid_id, assigned_at, completed_at

**conversations** - Messaging channels between customer and assigned provider
- id, job_id, customer_id, provider_id, created_at

**messages** - Individual messages in conversations
- id, conversation_id, sender_id, message_text, is_read, created_at

**job_status_history** - Audit trail of job status changes
- id, job_id, old_status, new_status, changed_by, note, created_at

## API Endpoints

### Authentication (`/auth`)
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `GET /auth/me` - Get current user

### Users (`/users`)
- `GET /users/me` - Get current user profile
- `PATCH /users/me` - Update user profile
- `PATCH /users/me/password` - Change password

### Providers (`/providers`)
- `GET /providers/:providerId` - Get provider details
- `POST /providers/profile` - Create provider profile
- `PATCH /providers/profile` - Update provider profile
- `PUT /providers/services` - Set provider services

### Categories (`/categories`)
- `GET /categories` - List all service categories

### Jobs (`/jobs`)
- `POST /jobs` - Create job
- `GET /jobs` - List jobs (open jobs for all, or filtered)
- `GET /jobs/:jobId` - Get job details
- `PATCH /jobs/:jobId` - Update job
- `POST /jobs/:jobId/cancel` - Cancel job
- `POST /jobs/:jobId/complete` - Mark job complete

### Bids (`/bids`)
- `POST /jobs/:jobId/bids` - Create bid
- `GET /jobs/:jobId/bids` - Get job bids (customer only)
- `PATCH /bids/:bidId` - Update bid
- `POST /bids/:bidId/withdraw` - Withdraw bid
- `POST /bids/:bidId/accept` - Accept bid (with transaction)
- `POST /bids/:bidId/reject` - Reject bid

### Conversations & Messages (`/conversations`, `/messages`)
- `GET /conversations` - List user conversations
- `GET /conversations/:conversationId` - Get conversation
- `GET /conversations/:conversationId/messages` - Get messages
- `POST /conversations/:conversationId/messages` - Send message
- `POST /messages/:messageId/read` - Mark message read

### Dashboard (`/dashboard`)
- `GET /dashboard/customer` - Customer dashboard stats
- `GET /dashboard/provider` - Provider dashboard stats

## Project Structure

```
src/
├── auth/                    # Authentication module
│   ├── auth.service.ts
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── dto/
│   └── strategies/
├── users/                   # User profile module
│   ├── users.service.ts
│   ├── users.controller.ts
│   ├── users.module.ts
│   └── dto/
├── providers/               # Provider profile module
│   ├── providers.service.ts
│   ├── providers.controller.ts
│   ├── providers.module.ts
│   └── dto/
├── categories/              # Service categories module
│   ├── categories.service.ts
│   ├── categories.controller.ts
│   ├── categories.module.ts
│   └── dto/
├── jobs/                    # Job management module
│   ├── jobs.service.ts
│   ├── jobs.controller.ts
│   ├── jobs.module.ts
│   └── dto/
├── bids/                    # Bidding system module
│   ├── bids.service.ts
│   ├── bids.controller.ts
│   ├── bids.module.ts
│   └── dto/
├── messages/                # Messaging module
│   ├── messages.service.ts
│   ├── messages.controller.ts
│   ├── messages.module.ts
│   └── dto/
├── dashboard/               # Dashboard module
│   ├── dashboard.service.ts
│   ├── dashboard.controller.ts
│   ├── dashboard.module.ts
│   └── dto/
├── common/                  # Shared utilities
│   ├── decorators/          # Custom decorators
│   ├── guards/              # Auth guards
│   ├── exceptions/          # Custom exceptions
│   └── enums/               # Enums (roles, statuses)
├── prisma/                  # Prisma ORM
│   ├── prisma.service.ts
│   └── prisma.module.ts
├── app.module.ts            # Root module
└── main.ts                  # Application bootstrap

prisma/
├── schema.prisma            # Database schema
└── seed.ts                  # Database seeding script
```

## Key Implementation Details

### Authentication Flow
1. User registers with email, password, full name, phone, and role
2. Password is hashed using bcrypt
3. Login returns JWT token valid for 24 hours
4. Token contains userId and role for authorization
5. All protected endpoints require JwtAuthGuard

### Role-Based Authorization
- **Customer**: Can create jobs, accept/reject bids, message providers, complete jobs
- **Provider**: Can create profile, bid on jobs, message customers, complete jobs
- **Admin**: Reserved for future implementation

### Bid Acceptance Transaction
The critical operation when accepting a bid uses Prisma transaction to:
1. Mark selected bid as accepted
2. Mark all other pending bids as rejected
3. Update job status to assigned
4. Set assigned_provider_id
5. Create job_assignment record
6. Create conversation for messaging
7. Create job_status_history entry

This ensures no race conditions or partial updates.

### Data Validation
- All DTOs use class-validator decorators
- Global validation pipe with meaningful error messages
- Request payload sanitization (whitelist mode)
- Type transformation for query parameters

### Error Handling
Custom exception classes for specific scenarios:
- UserAlreadyExistsException (409 Conflict)
- InvalidCredentialsException (401 Unauthorized)
- ResourceNotFoundException (404 Not Found)
- UnauthorizedActionException (403 Forbidden)
- ProviderProfileRequiredException (400 Bad Request)
- InvalidJobStatusException (400 Bad Request)
- CannotBidOnOwnJobException (400 Bad Request)
- BidAlreadyExistsException (400 Bad Request)

## Testing

Run the test suite:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate coverage report:

```bash
npm run test:cov
```

## Deployment

### Production Environment Setup

1. **Environment Variables**: Set all required variables in production `.env`
   - Change JWT_SECRET to a strong random key
   - Use production PostgreSQL database URL
   - Set NODE_ENV=production
   - Configure CORS origin for your domain

2. **Database**:
   ```bash
   npm run prisma:migrate:deploy
   npm run seed
   ```

3. **Build and Run**:
   ```bash
   npm run build
   npm run start:prod
   ```

### Docker Deployment

Example Dockerfile for production:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY dist ./dist

EXPOSE 3000
CMD ["node", "dist/main"]
```

## API Authentication

All protected endpoints require JWT token in Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

Example request:

```bash
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  http://localhost:3000/api/v1/users/me
```

## API Response Format

### Success Response
```json
{
  "id": "uuid",
  "email": "user@example.com",
  "fullName": "John Doe",
  "role": "customer"
}
```

### Error Response
```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "errors": ["email must be an email"]
    }
  ]
}
```

## Troubleshooting

### Database Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:5432
```
- Ensure PostgreSQL is running
- Check DATABASE_URL is correct
- Verify database exists: `psql -l`

### Migration Error
```
Error: PrismaClientInitializationError
```
- Run `npm run prisma:generate`
- Delete `node_modules/.prisma` folder
- Run `npm install`

### JWT Validation Error
```
"Invalid or expired token"
```
- Token may be expired (24h default)
- Re-login to get new token
- Check JWT_SECRET matches production secret

### Port Already in Use
Change PORT in `.env` or:
```bash
lsof -i :3000
kill -9 <PID>
```

## Future Enhancements

- Payment system integration
- Review and rating system
- Provider verification workflow
- Job search with geolocation
- Email notifications
- Real-time notifications with WebSockets
- Admin dashboard
- Analytics and reporting
- Two-factor authentication
- Provider insurance integrations
- Insurance claims system

## Support

For issues, questions, or contributions, please refer to the project documentation or contact the development team.

## License

This project is proprietary and confidential.
