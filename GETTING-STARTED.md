# CarTasker Backend - Getting Started

Welcome to CarTasker! This is a complete, production-ready NestJS backend for a mobile car services marketplace.

## ⚡ Quick Start (5 minutes)

### 1. Prerequisites
```bash
# Verify Node.js v18+
node --version

# Verify PostgreSQL is running
psql --version
```

### 2. Setup
```bash
# Install dependencies
npm install

# Create database
createdb cartasker_dev

# Setup environment
cp .env.example .env
# Edit .env with your database credentials
```

### 3. Initialize Database
```bash
# Run migrations and generate Prisma client
npm run prisma:generate
npm run prisma:migrate

# Seed categories
npm run seed
```

### 4. Start Development Server
```bash
npm run start:dev
```

### 5. Access API
- **API Documentation**: http://localhost:3000/api/docs
- **API Base URL**: http://localhost:3000/api/v1
- **Prisma Studio**: `npm run prisma:studio` (opens at http://localhost:5555)

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| [SETUP.md](SETUP.md) | Detailed installation & troubleshooting |
| [README.md](README.md) | Complete API documentation |
| [STRUCTURE.md](STRUCTURE.md) | Project structure & file organization |
| [API-TESTING.md](API-TESTING.md) | Example API requests & responses |
| [.env.example](.env.example) | Environment variables template |

---

## 🎯 Project Highlights

### Tech Stack
- **Framework**: NestJS (proven enterprise architecture)
- **Language**: TypeScript (type-safe)
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: JWT with Passport
- **API Docs**: Swagger/OpenAPI (auto-generated)
- **Validation**: class-validator

### Key Features
✅ **30 API Endpoints** - Complete marketplace functionality
✅ **Role-Based Access** - Customer, Provider, Admin roles
✅ **Database Transactions** - Atomic bid acceptance
✅ **Real-time Ready** - Messaging infrastructure
✅ **Production Ready** - Error handling, validation, logging
✅ **Fully Documented** - Swagger API docs + code comments
✅ **Modular Design** - 9 feature modules + common utilities
✅ **Clean Architecture** - Controllers, Services, DTOs, Guards, Enums

### Database Models (11 tables)
- Users & Profiles
- Service Categories
- Jobs & Bids
- Job Assignments
- Conversations & Messages
- Status History

---

## 🚀 Core Workflows

### Customer Workflow
1. Register as customer
2. Create a job with details
3. View incoming bids
4. Accept best bid
5. Message the provider
6. Mark job complete

### Provider Workflow
1. Register as provider
2. Create provider profile
3. Set service categories
4. Browse available jobs
5. Place bid on job
6. Message customer
7. Complete job

---

## 🔌 API Endpoints (by feature)

**Auth** (3) - register, login, get current user
**Users** (3) - profile management, password change
**Providers** (4) - provider profile, services
**Categories** (1) - list service types
**Jobs** (6) - create, list, view, update, cancel, complete
**Bids** (6) - create, list, accept, reject, withdraw
**Messages** (5) - conversations, messaging
**Dashboard** (2) - customer/provider stats

See [README.md](README.md) for full endpoint list and details.

---

## 💾 Database Setup

### Automatic Setup
```bash
npm run prisma:migrate    # Create tables from schema
npm run seed              # Populate categories
```

### Manual Database Access
```bash
# Prisma Studio (Visual GUI)
npm run prisma:studio

# Direct PostgreSQL
psql cartasker_dev
\dt                  # List tables
SELECT * FROM users; # View data
\q                   # Exit
```

---

## 📝 Common Development Tasks

```bash
# Start development (auto-reload)
npm run start:dev

# Build for production
npm run build

# Run in production
npm run start:prod

# Format code with Prettier
npm run format

# Lint with ESLint
npm run lint

# Run tests
npm run test

# Watch tests
npm run test:watch

# Open Prisma Studio
npm run prisma:studio

# View database migrations
npm run prisma:migrate
```

---

## 🔑 Environment Variables

Create `.env` file from `.env.example`:

```env
# Database connection string
DATABASE_URL="postgresql://user:password@localhost:5432/cartasker_dev"

# JWT secret (change in production!)
JWT_SECRET="your-super-secret-key"

# Token expiration
JWT_EXPIRATION="24h"

# Environment & Port
NODE_ENV="development"
PORT=3000

# API version
API_VERSION="v1"
```

---

## 🧪 Testing the API

### Using Swagger UI (Recommended)
1. Start server: `npm run start:dev`
2. Open: http://localhost:3000/api/docs
3. Click "Try it out" on any endpoint
4. Fill in parameters and execute

### Using cURL
```bash
# Register
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"pass123","fullName":"Test","role":"customer"}'

# Get categories
curl http://localhost:3000/api/v1/categories
```

### Using Postman
1. Import endpoints from Swagger: http://localhost:3000/api-json
2. Create environment with `{{base_url}}` and token variables
3. Test workflows step by step

See [API-TESTING.md](API-TESTING.md) for detailed examples.

---

## 🏗️ Project Structure

```
src/
├── auth/           # Registration, login, JWT
├── users/          # User profiles
├── providers/      # Provider profiles & services
├── categories/     # Service categories
├── jobs/           # Job posting & management
├── bids/           # Bidding system
├── messages/       # Messaging (conversations)
├── dashboard/      # Statistics dashboard
├── common/         # Shared utilities
│   ├── decorators/ # @CurrentUser, @Roles
│   ├── guards/     # JWT & roles auth
│   ├── exceptions/ # Custom errors
│   └── enums/      # Role, Status enums
├── prisma/         # Database service
├── app.module.ts   # Main module
└── main.ts         # Application bootstrap
```

---

## 🎓 Learning Path

### Beginner
1. Read this file
2. Run `npm run start:dev`
3. Test endpoints via Swagger
4. Explore database with Prisma Studio

### Intermediate
1. Review [README.md](README.md)
2. Study auth flow in `src/auth/`
3. Try example requests in [API-TESTING.md](API-TESTING.md)
4. Make API calls with Postman

### Advanced
1. Read [STRUCTURE.md](STRUCTURE.md)
2. Study transaction in `src/bids/bids.service.ts`
3. Modify endpoints to add features
4. Deploy to production

---

## 🆘 Troubleshooting

### Port 3000 already in use
```bash
# Change port in .env or find process
lsof -i :3000
kill -9 <PID>
```

### Database connection error
```bash
# Check PostgreSQL is running
brew services list | grep postgresql

# Verify credentials in .env
psql -U postgres
```

### Module not found errors
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
npm run prisma:generate
```

### Migration issues
```bash
# Reset database (careful - deletes all data!)
npm run prisma:migrate:reset
npm run seed
```

See [SETUP.md](SETUP.md) for more troubleshooting.

---

## 📦 What's Included

✅ Complete REST API codebase
✅ Prisma ORM with PostgreSQL
✅ JWT authentication & authorization
✅ Database schema with 11 models
✅ Seed data for service categories
✅ Swagger API documentation
✅ Error handling & validation
✅ Role-based access control
✅ Transaction handling for critical operations
✅ Environment configuration
✅ Clean code with comments
✅ Production-ready structure

---

## 🚢 Deployment Ready

The codebase is ready for production deployment:

- Docker-ready (easily containerizable)
- Environment variable configuration
- Error handling & logging
- Database migrations
- API versioning
- Type-safe with TypeScript
- Modular, scalable architecture

For deployment instructions, see production section in [README.md](README.md).

---

## 📞 Need Help?

1. **Setup Issues?** → Check [SETUP.md](SETUP.md)
2. **API Questions?** → Check [README.md](README.md) or [API-TESTING.md](API-TESTING.md)
3. **Code Structure?** → Check [STRUCTURE.md](STRUCTURE.md)
4. **Testing?** → See [API-TESTING.md](API-TESTING.md) for examples
5. **NestJS Docs** → https://docs.nestjs.com
6. **Prisma Docs** → https://www.prisma.io/docs

---

## ✨ Next Steps

1. ✅ Follow Quick Start above (5 min)
2. 📚 Skim [README.md](README.md) (10 min)
3. 🧪 Test with Swagger (10 min)
4. 🏗️ Review code structure (15 min)
5. 💻 Start developing! (infinite fun)

---

## 🎉 You're Ready!

Your CarTasker backend is now ready for development or production use.

```bash
npm run start:dev
```

Open http://localhost:3000/api/docs and start building! 🚀

---

**Happy coding!** 💻
