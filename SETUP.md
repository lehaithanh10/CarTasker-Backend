# CarTasker Backend - Quick Start Guide

This guide will help you get the CarTasker backend up and running locally.

## Prerequisites

- **Node.js**: v18.0.0 or higher
- **PostgreSQL**: v13 or higher (Install via [PostgreSQL.org](https://www.postgresql.org/download/) or Homebrew)
- **npm or yarn**: Node package manager

## Installation Steps

### Step 1: Verify Dependencies

Check that Node.js and PostgreSQL are installed:

```bash
node --version    # Should be v18+
npm --version     # Should be v8+
psql --version    # Should display PostgreSQL version
```

### Step 2: Install Project Dependencies

```bash
cd /Users/haithanhle1510/Developers/CarTaskers
npm install
```

This will install all required packages including NestJS, Prisma, JWT, and dependencies.

### Step 3: Create PostgreSQL Database

Open a terminal and create the database:

```bash
createdb cartasker_dev
```

Or using psql:

```bash
psql -U postgres
postgres=# CREATE DATABASE cartasker_dev;
postgres=# \q
```

### Step 4: Configure Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit `.env` and update the DATABASE_URL with your PostgreSQL credentials:

```env
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/cartasker_dev"
JWT_SECRET="your-super-secret-key-here"
JWT_EXPIRATION="24h"
NODE_ENV="development"
PORT=3000
API_VERSION="v1"
```

**Common PostgreSQL setup:**
- If installed locally without a password: `postgresql://postgres@localhost:5432/cartasker_dev`
- If installed with a password: `postgresql://postgres:password@localhost:5432/cartasker_dev`

### Step 5: Set Up Prisma and Database Schema

Generate Prisma client and run migrations:

```bash
npm run prisma:generate
npm run prisma:migrate
```

This creates all tables based on the Prisma schema.

### Step 6: Seed the Database

Populate service categories:

```bash
npm run seed
```

Expected output:
```
🌱 Seeding database...
✅ Created service category: Car Service
✅ Created service category: Mobile Tyres
✅ Created service category: Mobile Detailing
✅ Created service category: Roadside Assistance
✅ Created service category: Mobile Batteries
✅ Created service category: Key Programming
✅ Created service category: Vehicle Inspection

✨ Seeding completed successfully!
```

### Step 7: Start the Development Server

```bash
npm run start:dev
```

You should see:
```
✅ Application is running on: http://localhost:3000
📚 Swagger documentation: http://localhost:3000/api/docs
```

## Verify Installation

### 1. Check API Health

Open your browser and navigate to:
```
http://localhost:3000/api/docs
```

You should see the Swagger API documentation with all endpoints listed.

### 2. Test a Simple Endpoint

Using curl or Postman, test the categories endpoint (no auth required):

```bash
curl http://localhost:3000/api/v1/categories
```

Expected response:
```json
[
  {
    "id": "uuid",
    "name": "Car Service",
    "slug": "car-service",
    "isActive": true,
    "createdAt": "2024-..."
  },
  ...
]
```

### 3. Test Authentication

Register a new user:

```bash
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "customer@example.com",
    "password": "password123",
    "fullName": "John Doe",
    "phone": "1234567890",
    "role": "customer"
  }'
```

Expected response:
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "email": "customer@example.com",
    "fullName": "John Doe",
    "role": "customer"
  }
}
```

## Development Commands

```bash
# Start in development mode with auto-reload
npm run start:dev

# Build for production
npm run build

# Run production build
npm run start:prod

# Format code with Prettier
npm run format

# Run ESLint
npm run lint

# Run tests
npm run test

# Watch tests
npm run test:watch

# Open Prisma Studio (Visual database explorer)
npm run prisma:studio

# Generate Prisma client after schema changes
npm run prisma:generate
```

## Database Management

### View Database with Prisma Studio

```bash
npm run prisma:studio
```

Opens a visual interface at `http://localhost:5555` to view and edit database records.

### Reset Database

Be careful with this command as it deletes all data:

```bash
npm run prisma:migrate:reset
```

### View Database Directly

Using psql:

```bash
psql -U postgres -d cartasker_dev
cartasker_dev=# \dt                    # List all tables
cartasker_dev=# SELECT * FROM users;   # View users table
cartasker_dev=# \q                     # Exit
```

## Common Issues and Solutions

### Issue: `Error: connect ECONNREFUSED 127.0.0.1:5432`

**Cause**: PostgreSQL is not running

**Solution**:
```bash
# Start PostgreSQL (on macOS with Homebrew)
brew services start postgresql

# Or check if it's running
brew services list
```

### Issue: `database "cartasker_dev" does not exist`

**Cause**: Database not created

**Solution**:
```bash
createdb cartasker_dev
npm run prisma:migrate
```

### Issue: `PSL Error: DATABASE_URL not found in .env`

**Cause**: `.env` file not created or DATABASE_URL not set

**Solution**:
```bash
cp .env.example .env
# Edit .env and set DATABASE_URL
```

### Issue: Port 3000 already in use

**Solution**: Change PORT in `.env` or kill the process using the port:
```bash
lsof -i :3000          # Find process
kill -9 <PID>          # Kill it
```

### Issue: Module not found errors after npm install

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
npm run prisma:generate
```

## Project File Structure

```
CarTaskers/
├── src/
│   ├── auth/                 # Authentication (login, register)
│   ├── users/                # User profile management
│   ├── providers/            # Service provider profiles
│   ├── categories/           # Service categories
│   ├── jobs/                 # Job posting and management
│   ├── bids/                 # Bidding system
│   ├── messages/             # Messaging between users
│   ├── dashboard/            # Dashboard endpoints
│   ├── common/               # Shared utilities
│   │   ├── decorators/       # @CurrentUser, @Roles
│   │   ├── guards/           # JWT and roles authorization
│   │   ├── exceptions/       # Custom error classes
│   │   └── enums/            # Enums (roles, statuses)
│   ├── prisma/               # Database service
│   ├── app.module.ts        # Root module
│   └── main.ts              # Application entry point
├── prisma/
│   ├── schema.prisma        # Database schema
│   └── seed.ts              # Database seeding
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── .env.example             # Environment template
├── .env                     # Local environment (create from .env.example)
├── README.md                # Full documentation
└── SETUP.md                 # This file
```

## Next Steps

1. **Review the API Documentation**: Visit [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

2. **Test Core Workflows**:
   - Register as a customer
   - Register as a provider
   - Create a job
   - Place a bid
   - Accept a bid

3. **Explore the Code**: Start with:
   - `src/auth/auth.controller.ts` - Authentication endpoints
   - `src/jobs/jobs.service.ts` - Job business logic
   - `src/bids/bids.service.ts` - Bid acceptance with transactions

4. **Read the Full README**: See `README.md` for comprehensive documentation

## Support Resources

- **NestJS Documentation**: https://docs.nestjs.com
- **Prisma Documentation**: https://www.prisma.io/docs
- **PostgreSQL Documentation**: https://www.postgresql.org/docs
- **JWT Guide**: https://jwt.io

## Performance Tips

- Use Prisma Studio to visualize data: `npm run prisma:studio`
- Enable database query logging by setting `DEBUG=prisma:*` environment variable
- Monitor API performance with Swagger endpoints
- Use pagination on list endpoints (page, pageSize parameters)

Good luck with your CarTasker backend development! 🚀
