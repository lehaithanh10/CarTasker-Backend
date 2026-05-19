# CarTasker API - Testing Guide

Quick reference for testing the CarTasker API with example requests and responses.

## Base URL

```
http://localhost:3000/api/v1
```

## Authentication

All protected endpoints require JWT token in Authorization header:

```
Authorization: Bearer <access_token>
```

---

## Testing Workflow

### 1. Register a Customer

**Request:**
```bash
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "customer@example.com",
    "password": "password123",
    "fullName": "John Customer",
    "phone": "0412345678",
    "role": "customer"
  }'
```

**Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "email": "customer@example.com",
    "fullName": "John Customer",
    "role": "customer"
  }
}
```

**Save the accessToken for use in other requests.**

---

### 2. Register a Service Provider

**Request:**
```bash
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "provider@example.com",
    "password": "password123",
    "fullName": "Jane Provider",
    "phone": "0487654321",
    "role": "provider"
  }'
```

**Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440002",
    "email": "provider@example.com",
    "fullName": "Jane Provider",
    "role": "provider"
  }
}
```

---

### 3. Get Service Categories

**Request:**
```bash
curl http://localhost:3000/api/v1/categories
```

**Response:**
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440011",
    "name": "Car Service",
    "slug": "car-service",
    "isActive": true,
    "createdAt": "2024-01-15T10:30:00Z"
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440012",
    "name": "Mobile Tyres",
    "slug": "mobile-tyres",
    "isActive": true,
    "createdAt": "2024-01-15T10:30:00Z"
  },
  ...
]
```

**Note the category IDs for creating jobs and provider services.**

---

### 4. Create Provider Profile

**Request:**
```bash
curl -X POST http://localhost:3000/api/v1/providers/profile \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <provider_token>" \
  -d '{
    "businessName": "Expert Auto Services",
    "bio": "15+ years of professional car maintenance",
    "yearsExperience": 15,
    "serviceAreaText": "Metropolitan area",
    "suburb": "Melbourne",
    "state": "VIC"
  }'
```

**Response:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440021",
  "userId": "550e8400-e29b-41d4-a716-446655440002",
  "businessName": "Expert Auto Services",
  "bio": "15+ years of professional car maintenance",
  "yearsExperience": 15,
  "serviceAreaText": "Metropolitan area",
  "suburb": "Melbourne",
  "state": "VIC",
  "isVerified": false,
  "createdAt": "2024-01-15T11:00:00Z",
  "updatedAt": "2024-01-15T11:00:00Z"
}
```

---

### 5. Set Provider Services

**Request:**
```bash
curl -X PUT http://localhost:3000/api/v1/providers/services \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <provider_token>" \
  -d '{
    "serviceCategories": [
      "550e8400-e29b-41d4-a716-446655440011",
      "550e8400-e29b-41d4-a716-446655440012"
    ]
  }'
```

**Response:**
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440031",
    "providerId": "550e8400-e29b-41d4-a716-446655440002",
    "categoryId": "550e8400-e29b-41d4-a716-446655440011",
    "createdAt": "2024-01-15T11:05:00Z",
    "category": {
      "id": "550e8400-e29b-41d4-a716-446655440011",
      "name": "Car Service",
      "slug": "car-service"
    }
  },
  ...
]
```

---

### 6. Create a Job (Customer)

**Request:**
```bash
curl -X POST http://localhost:3000/api/v1/jobs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <customer_token>" \
  -d '{
    "categoryId": "550e8400-e29b-41d4-a716-446655440011",
    "title": "Regular Car Service",
    "description": "Need an oil change and filter replacement",
    "locationText": "123 Main Street, Melbourne",
    "suburb": "Melbourne",
    "state": "VIC",
    "preferredDate": "2024-01-20T10:00:00Z"
  }'
```

**Response:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440041",
  "customerId": "550e8400-e29b-41d4-a716-446655440001",
  "categoryId": "550e8400-e29b-41d4-a716-446655440011",
  "title": "Regular Car Service",
  "description": "Need an oil change and filter replacement",
  "locationText": "123 Main Street, Melbourne",
  "suburb": "Melbourne",
  "state": "VIC",
  "preferredDate": "2024-01-20T10:00:00Z",
  "status": "open",
  "assignedProviderId": null,
  "createdAt": "2024-01-15T11:15:00Z",
  "updatedAt": "2024-01-15T11:15:00Z"
}
```

**Save the job ID for bidding.**

---

### 7. Provider Bids on Job

**Request:**
```bash
curl -X POST http://localhost:3000/api/v1/jobs/550e8400-e29b-41d4-a716-446655440041/bids \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <provider_token>" \
  -d '{
    "bidAmount": 150,
    "message": "I can do this job efficiently",
    "estimatedArrivalHours": 2
  }'
```

**Response:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440051",
  "jobId": "550e8400-e29b-41d4-a716-446655440041",
  "providerId": "550e8400-e29b-41d4-a716-446655440002",
  "bidAmount": 150,
  "message": "I can do this job efficiently",
  "estimatedArrivalHours": 2,
  "status": "pending",
  "createdAt": "2024-01-15T11:20:00Z",
  "updatedAt": "2024-01-15T11:20:00Z"
}
```

---

### 8. View Bids on Job (Customer)

**Request:**
```bash
curl http://localhost:3000/api/v1/jobs/550e8400-e29b-41d4-a716-446655440041/bids \
  -H "Authorization: Bearer <customer_token>"
```

**Response:**
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440051",
    "jobId": "550e8400-e29b-41d4-a716-446655440041",
    "providerId": "550e8400-e29b-41d4-a716-446655440002",
    "bidAmount": 150,
    "message": "I can do this job efficiently",
    "estimatedArrivalHours": 2,
    "status": "pending",
    "createdAt": "2024-01-15T11:20:00Z",
    "updatedAt": "2024-01-15T11:20:00Z",
    "provider": {
      "id": "550e8400-e29b-41d4-a716-446655440002",
      "fullName": "Jane Provider",
      "phone": "0487654321"
    }
  }
]
```

---

### 9. Accept Bid (Customer)

**Request:**
```bash
curl -X POST http://localhost:3000/api/v1/bids/550e8400-e29b-41d4-a716-446655440051/accept \
  -H "Authorization: Bearer <customer_token>"
```

**Response:**
```json
{
  "acceptedBid": {
    "id": "550e8400-e29b-41d4-a716-446655440051",
    "status": "accepted",
    ...
  },
  "updatedJob": {
    "id": "550e8400-e29b-41d4-a716-446655440041",
    "status": "assigned",
    "assignedProviderId": "550e8400-e29b-41d4-a716-446655440002",
    ...
  },
  "jobAssignment": {
    "id": "550e8400-e29b-41d4-a716-446655440061",
    "jobId": "550e8400-e29b-41d4-a716-446655440041",
    "customerId": "550e8400-e29b-41d4-a716-446655440001",
    "providerId": "550e8400-e29b-41d4-a716-446655440002",
    "acceptedBidId": "550e8400-e29b-41d4-a716-446655440051",
    "assignedAt": "2024-01-15T11:25:00Z"
  },
  "conversation": {
    "id": "550e8400-e29b-41d4-a716-446655440071",
    "jobId": "550e8400-e29b-41d4-a716-446655440041",
    "customerId": "550e8400-e29b-41d4-a716-446655440001",
    "providerId": "550e8400-e29b-41d4-a716-446655440002",
    "createdAt": "2024-01-15T11:25:00Z"
  }
}
```

**Transaction completed: Bid accepted, job assigned, conversation created.**

---

### 10. Get Conversations

**Request:**
```bash
curl http://localhost:3000/api/v1/conversations \
  -H "Authorization: Bearer <customer_token>"
```

**Response:**
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440071",
    "jobId": "550e8400-e29b-41d4-a716-446655440041",
    "customerId": "550e8400-e29b-41d4-a716-446655440001",
    "providerId": "550e8400-e29b-41d4-a716-446655440002",
    "createdAt": "2024-01-15T11:25:00Z",
    "job": {
      "id": "550e8400-e29b-41d4-a716-446655440041",
      "title": "Regular Car Service",
      "status": "assigned"
    }
  }
]
```

---

### 11. Send Message

**Request:**
```bash
curl -X POST http://localhost:3000/api/v1/conversations/550e8400-e29b-41d4-a716-446655440071/messages \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <customer_token>" \
  -d '{
    "messageText": "Hi Jane, when can you start the job?"
  }'
```

**Response:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440081",
  "conversationId": "550e8400-e29b-41d4-a716-446655440071",
  "senderId": "550e8400-e29b-41d4-a716-446655440001",
  "messageText": "Hi Jane, when can you start the job?",
  "isRead": false,
  "createdAt": "2024-01-15T11:30:00Z",
  "sender": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "fullName": "John Customer",
    "avatarUrl": null
  }
}
```

---

### 12. Get Messages

**Request:**
```bash
curl http://localhost:3000/api/v1/conversations/550e8400-e29b-41d4-a716-446655440071/messages \
  -H "Authorization: Bearer <customer_token>"
```

**Response:**
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440081",
    "conversationId": "550e8400-e29b-41d4-a716-446655440071",
    "senderId": "550e8400-e29b-41d4-a716-446655440001",
    "messageText": "Hi Jane, when can you start the job?",
    "isRead": false,
    "createdAt": "2024-01-15T11:30:00Z",
    "sender": {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "fullName": "John Customer",
      "avatarUrl": null
    }
  }
]
```

---

### 13. Customer Dashboard

**Request:**
```bash
curl http://localhost:3000/api/v1/dashboard/customer \
  -H "Authorization: Bearer <customer_token>"
```

**Response:**
```json
{
  "openJobsCount": 5,
  "assignedJobsCount": 2,
  "completedJobsCount": 8,
  "openJobs": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "title": "Regular Car Service",
      "status": "open",
      "createdAt": "2024-01-15T11:15:00Z"
    }
  ]
}
```

---

### 14. Provider Dashboard

**Request:**
```bash
curl http://localhost:3000/api/v1/dashboard/provider \
  -H "Authorization: Bearer <provider_token>"
```

**Response:**
```json
{
  "availableJobsCount": 12,
  "pendingBidsCount": 3,
  "assignedJobsCount": 1,
  "completedJobsCount": 5,
  "recentBids": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440051",
      "jobTitle": "Regular Car Service",
      "status": "accepted",
      "createdAt": "2024-01-15T11:20:00Z"
    }
  ]
}
```

---

### 15. Complete Job

**Request:**
```bash
curl -X POST http://localhost:3000/api/v1/jobs/550e8400-e29b-41d4-a716-446655440041/complete \
  -H "Authorization: Bearer <customer_token>"
```

**Response:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440041",
  "customerId": "550e8400-e29b-41d4-a716-446655440001",
  "categoryId": "550e8400-e29b-41d4-a716-446655440011",
  "title": "Regular Car Service",
  "status": "completed",
  "assignedProviderId": "550e8400-e29b-41d4-a716-446655440002",
  "updatedAt": "2024-01-15T14:00:00Z"
}
```

---

## Common HTTP Status Codes

| Code | Meaning | Example |
|------|---------|---------|
| 200 | OK | Successful GET/PATCH/POST |
| 201 | Created | Resource created (POST) |
| 400 | Bad Request | Validation failed |
| 401 | Unauthorized | Missing/invalid JWT token |
| 403 | Forbidden | Lacks permission (wrong role) |
| 404 | Not Found | Resource doesn't exist |
| 409 | Conflict | Email already exists |

---

## Error Response Example

```json
{
  "statusCode": 400,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "errors": ["email must be an email"]
    },
    {
      "field": "password",
      "errors": ["password must be longer than or equal to 6 characters"]
    }
  ]
}
```

---

## Testing Tips

1. **Use Postman or Insomnia** for easier API testing with saved collections
2. **Copy tokens between requests** for authenticated endpoints
3. **Note UUIDs** from responses to use in subsequent requests
4. **Test error cases** (missing fields, invalid data, unauthorized access)
5. **Check database** with `npm run prisma:studio` to verify saved data
6. **Review logs** in terminal for debug information

---

## Postman Collection

You can import this for quick testing. Create a new collection with:

1. **Environment Variables**:
   - `{{base_url}}` = http://localhost:3000/api/v1
   - `{{customer_token}}` = (copy from register response)
   - `{{provider_token}}` = (copy from register response)

2. Add requests from examples above, replacing URLs with `{{base_url}}/...`

Good luck testing! 🚀
