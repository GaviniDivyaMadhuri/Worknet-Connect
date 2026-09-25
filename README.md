# WorkNet Connect — Local Worker Hiring & Service Marketplace Platform

A full-stack web application that connects users with nearby skilled workers and service providers such as electricians, plumbers, carpenters, painters, cleaners, and other daily wage professionals.

---

## 📌 Project Overview

WorkNet Connect is a React (Vite) web application developed to simplify the process of finding local workers and service providers. Users can search for workers, view profiles, and connect directly for required services. Workers can register, manage profiles, and upload service posts to reach more customers.

The application provides a simple and user-friendly platform for improving communication between customers and workers.

---

## 🛠️ Tech Stack

| Technology       | Usage                          |
| ----------------- | ------------------------------- |
| React (Vite)      | Frontend Web App                |
| React Router      | Client-side Routing              |
| Axios             | API Requests                     |
| Node.js           | Backend Runtime                  |
| Express.js        | API Development                  |
| MongoDB           | Database                         |
| REST API          | Frontend-Backend Communication   |

---

## ✨ Features

- User Registration and Login
- Worker Profile Management
- Search and Find Workers
- Upload Service Posts
- Responsive Web UI
- REST API Integration
- Secure Authentication
- Easy Navigation Interface

---

## 📱 Application Pages

- Home
- Login
- Registration
- Find Workers
- Profile
- Upload Post

---

## 📂 Project Structure

```
worknet-connect/
│
├── src/
│   ├── api/
│   │   └── apiService.js       # Mirrors the original API service layer
│   ├── components/
│   │   └── NavBar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── FindWorkers.jsx
│   │   ├── Profile.jsx
│   │   └── UploadPost.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── server.js
└── README.md
```

---

## ⚙️ System Functionalities

### Authentication
- User login and registration
- Session handling
- Secure authentication system

### Worker Management
- Create and update worker profiles
- Add service details and skills
- Manage worker information

### Service Posting
- Upload service/job posts
- Display worker services
- Manage service descriptions

### Worker Search
- Browse available workers
- Search workers by category
- View worker details and profiles

---

## 🗄️ Database Collections

- Users
- Workers
- Services
- Posts
- Bookings

---

## 🚀 Run Locally

### Prerequisites

- Node.js
- MongoDB
- A code editor (VS Code recommended)

### Clone Repository

```bash
git clone https://github.com/GaviniDivyaMadhuri/Worknet-Connect.git
cd Worknet-Connect
```

### Install Frontend Dependencies

```bash
npm install
```

### Run the Frontend (Dev Server)

```bash
npm run dev
```

The app runs at `http://localhost:5173`. In development, API requests to `/api/...` are proxied to `http://localhost:5000` (see `vite.config.js`), so no separate base URL configuration is needed.

### Start Backend Server

In a separate terminal:

```bash
npm install
node server.js
```

The backend runs at `http://localhost:5000`.

### Production Build

```bash
npm run build
```

This outputs static files to `dist/`, which can be served directly from Express (or any static host) alongside the API.

---

## 🎯 Future Enhancements

- Real-time Chat System
- Online Payment Integration
- Worker Ratings and Reviews
- GPS-Based Worker Tracking
- Push Notifications
- Multi-language Support

---

## 👨‍💻 Developed By

Gavini Divya Madhuri
B.Tech — Computer Science and Engineering
