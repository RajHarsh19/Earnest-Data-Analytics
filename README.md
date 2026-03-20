# 📝 Task Management System (Full-Stack)

A full-stack Task Management System built using **Node.js, TypeScript, Prisma, PostgreSQL, and Next.js**.
This application allows users to securely manage their personal tasks with authentication and full CRUD functionality.

---

## 🚀 Features

### 🔐 Authentication

* User Registration & Login
* JWT-based Authentication (Access Token)
* Password hashing using bcrypt

### 📋 Task Management

* Create, Read, Update, Delete (CRUD) tasks
* Toggle task completion status
* Tasks are user-specific

### 🔍 Advanced Features

* Pagination support
* Filtering by status
* Search by task title

### 🌐 Frontend

* Built with Next.js (App Router)
* Responsive UI using Tailwind CSS
* Login & Dashboard pages

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* PostgreSQL
* JWT Authentication

### Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Axios

---

## 📁 Project Structure

```
task_manager_project/
│
├── backend/
│   ├── src/
│   ├── prisma/
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── app/
│   ├── package.json
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```
git clone <your-repo-url>
cd task_manager_project
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
DATABASE_URL="postgresql://user:password@localhost:5432/tasks"
JWT_SECRET="your_secret"
JWT_REFRESH="your_refresh_secret"
```

Run migrations:

```
npx prisma migrate dev
```

Start backend server:

```
npm run dev
```

👉 Backend runs on: **http://localhost:5000**

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm install axios react-hot-toast
```

Start frontend:

```
npm run dev
```

👉 Frontend runs on: **http://localhost:3000**

---

## 🔗 API Endpoints

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### Tasks

* `GET /api/tasks`
* `POST /api/tasks`
* `PATCH /api/tasks/:id`
* `DELETE /api/tasks/:id`
* `PATCH /api/tasks/:id/toggle`

---

## 🧪 Testing

Use **Postman** or frontend UI:

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

---

## 🎯 Future Improvements

* Refresh Token implementation
* Role-based authentication
* Task deadlines & priorities
* Drag & drop UI
* Deployment (Vercel + Render)

---

## 📸 Screenshots

*(Add screenshots here before submission)*

---

## 👨‍💻 Author

**Harsh Raj**

---

## ⭐ Conclusion

This project demonstrates:

* Full-stack development
* Secure authentication
* REST API design
* Modern frontend development

---

⭐ If you like this project, give it a star!
