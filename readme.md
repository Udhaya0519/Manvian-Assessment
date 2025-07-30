**Employee Portal Setup Guide**

## Prerequisites

- **Node.js** (v14 or above)
- **npm** (v6 or above)
- A REST client for testing (e.g., Postman, Insomnia) or `curl`

---

## Getting Started

You'll have two directories inside:

- `frontend`
- `backend`

---

## Frontend Setup

### Tools & Libraries

- **React** (v18+)
- **Tailwind CSS**
- **DaisyUI**

### Installation & Run

1. Navigate into the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Development Server

- The app will be available at:  `http://localhost:5173`

---

## Backend Setup

### Tools & Libraries

- **Node.js**
- **Express.js**
- **bcryptjs** (for password hashing)
- **uuid** (for generating unique IDs)

### Installation & Run

1. Navigate into the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run start
   ```

- The server will run on `http://localhost:3000`

### API Endpoints

| Method | Endpoint           | Description                   |
| ------ | ------------------ | ----------------------------- |
| POST   | `/users`           | Register a new user           |
| GET    | `/users`           | Retrieve all registered users |
| POST   | `/api/leave/apply` | Submit a leave application    |
| GET    | `/api/leave/all`   | Retrieve all leave requests   |

---

## Data Formats

### User Registration Payload

```json
{
  "name": "Udhaya J",
  "email": "udhaya@gmail.com",
  "password": "sjdhjsdchb"
}
```

### Leave Application Payload

```json
{
  "email": "udhayaj@gmail.com",
  "fromDate": "2025-08-01",
  "toDate": "2025-08-05",
  "reason": "Medical leave"
}
```

---

## Testing the API

Use Postman, Insomnia, or similar to test the endpoints:

1. **Users**
   - GET all users: `GET http://localhost:3000/users`
   - Register user: `POST http://localhost:3000/users` with JSON body
2. **Leave**
   - Apply for leave: `POST http://localhost:3000/api/leave/apply` with JSON body
   - Fetch all leave requests: `GET http://localhost:3000/api/leave/all`

---

