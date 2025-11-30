# ZeberAI API Documentation

## Base URL
```
http://localhost:5000/api
```

## Contact Requests

### Create Contact Request
**POST** `/contact`

Creates a new contact request from the quote form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "contactMethod": "email",
  "contactValue": "john@example.com",
  "companyName": "Tech Corp",
  "teamMembers": 25,
  "budget": "₹5,00,000 - ₹10,00,000",
  "expectedTraffic": "10,000 - 1,00,000 users/month",
  "projectTypes": ["app-android-ios", "website"],
  "message": "Looking for a custom AI solution..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact request submitted successfully",
  "data": {
    "_id": "60f7b1b3c9e4fc3b7c8b4567",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "contactMethod": "email",
    "contactValue": "john@example.com",
    "companyName": "Tech Corp",
    "teamMembers": 25,
    "budget": "₹5,00,000 - ₹10,00,000",
    "expectedTraffic": "10,000 - 1,00,000 users/month",
    "projectTypes": ["app-android-ios", "website"],
    "message": "Looking for a custom AI solution...",
    "createdAt": "2023-07-21T10:30:00.000Z",
    "updatedAt": "2023-07-21T10:30:00.000Z"
  }
}
```

### Get All Contact Requests
**GET** `/contact`

Retrieves all contact requests (admin endpoint).

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "60f7b1b3c9e4fc3b7c8b4567",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "contactMethod": "email",
      "contactValue": "john@example.com",
      "companyName": "Tech Corp",
      "teamMembers": 25,
      "budget": "₹5,00,000 - ₹10,00,000",
      "expectedTraffic": "10,000 - 1,00,000 users/month",
      "projectTypes": ["app-android-ios", "website"],
      "message": "Looking for a custom AI solution...",
      "createdAt": "2023-07-21T10:30:00.000Z",
      "updatedAt": "2023-07-21T10:30:00.000Z"
    }
  ]
}
```

### Get Contact Request by ID
**GET** `/contact/:id`

Retrieves a specific contact request by ID.

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "60f7b1b3c9e4fc3b7c8b4567",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "contactMethod": "email",
    "contactValue": "john@example.com",
    "companyName": "Tech Corp",
    "teamMembers": 25,
    "budget": "₹5,00,000 - ₹10,00,000",
    "expectedTraffic": "10,000 - 1,00,000 users/month",
    "projectTypes": ["app-android-ios", "website"],
    "message": "Looking for a custom AI solution...",
    "createdAt": "2023-07-21T10:30:00.000Z",
    "updatedAt": "2023-07-21T10:30:00.000Z"
  }
}
```

### Delete Contact Request
**DELETE** `/contact/:id`

Deletes a contact request by ID.

**Response:**
```json
{
  "success": true,
  "message": "Contact request deleted successfully"
}
```

## Services

### Create Service
**POST** `/services`

Creates a new service.

**Request Body:**
```json
{
  "title": "Process Automation",
  "description": "Eliminate repetitive work with our intelligent automation solutions.",
  "icon": "🤖",
  "category": "automation",
  "features": [
    "Workflow automation",
    "Data processing automation"
  ],
  "pricing": "Starting at $2,500/month",
  "duration": "2-4 weeks implementation"
}
```

### Get All Services
**GET** `/services`

Retrieves all active services.

### Get Service by ID
**GET** `/services/:id`

Retrieves a specific service by ID.

### Update Service
**PUT** `/services/:id`

Updates a service by ID.

### Delete Service
**DELETE** `/services/:id`

Soft deletes a service by ID.

## Team Members

### Create Team Member
**POST** `/team`

Creates a new team member.

### Get All Team Members
**GET** `/team`

Retrieves all active team members.

### Get Team Member by ID
**GET** `/team/:id`

Retrieves a specific team member by ID.

### Update Team Member
**PUT** `/team/:id`

Updates a team member by ID.

### Delete Team Member
**DELETE** `/team/:id`

Soft deletes a team member by ID.