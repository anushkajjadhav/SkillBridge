# 🌉 SkillBridge

**SkillBridge** is a full-stack web application built to connect learners with peer mentors in real-time. It allows users to log in, view available tutors, and book sessions based on skills, availability, and expertise.

---

## 🔧 Tech Stack

### 🔹 Frontend
- Angular 17+
- SCSS (with green–aqua themed design)
- Standalone Components
- Angular Forms
- HTTP Interceptor for JWT

### 🔹 Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT Authentication
- CORS

---

## 🚀 Features

- ✅ User Registration & Login (JWT-based)
- ✅ Token-based protected routes
- ✅ Tutor listing, searching, sorting
- ✅ Home & Landing pages
- ✅ Responsive design
- ✅ Angular HTTP Interceptor

---

## 🔐 Authentication

- JWT tokens are stored in `localStorage`.
- All protected API calls use `Authorization: Bearer <token>` header.
- Tokens expire after 2 hours.

---

### Results
<img width="1689" alt="Screenshot 2025-06-28 at 3 35 59 PM" src="https://github.com/user-attachments/assets/2e44ee3b-44f5-4f8f-99bd-9b276ee93e02" />
<img width="1689" alt="Screenshot 2025-06-28 at 3 36 26 PM" src="https://github.com/user-attachments/assets/11265045-c865-4a54-ab9d-960f0e9b4b2a" />
<img width="1689" alt="Screenshot 2025-06-28 at 3 36 45 PM" src="https://github.com/user-attachments/assets/04620b9b-42fb-4a92-9fa1-13138b568cf1" />


## 🗂️ Project Structure

skillbridge/
├── client/ # Angular frontend
│ └── src/
│ └── app/
│ ├── login/
│ ├── home/
│ ├── landing/
│ ├── tutor-list/
│ ├── interceptors/
│ └── app.routes.ts
├── server/ # Node.js backend
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ └── server.js
├── .env
└── README.md


---

## 💡 Setup Instructions

### 🖥 Backend

```bash
cd server
npm install
npx nodemon server.js


Make sure your .env includes:

PORT=5050
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key

### 🌐 Frontend

cd client
npm install
ng serve


