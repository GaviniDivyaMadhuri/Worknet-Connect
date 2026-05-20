WorkNet Connect — Local Worker Hiring & Service Marketplace Platform

A full-stack mobile application that connects users with nearby skilled workers and daily service providers in a fast, simple, and reliable way.

📌 Project Overview

WorkNet Connect is a mobile-based worker hiring platform designed to help users find skilled workers such as electricians, plumbers, carpenters, painters, cleaners, and other local service providers. Workers can create profiles, upload service posts, and connect directly with customers looking for services nearby.

The platform simplifies local job discovery and improves communication between workers and customers through an easy-to-use interface.

🛠️ Tech Stack
Layer	Technology
Frontend	Flutter (Dart)
Backend	Node.js, Express.js
Database	MongoDB
API Communication	REST API
Authentication	JWT / Session-Based Authentication
IDE	VS Code / Android Studio
📱 Main Features
User Registration & Login
Worker Profile Management
Search and Find Nearby Workers
Upload Service Posts
Customer and Worker Interaction
Responsive Flutter Mobile UI
REST API Integration
Secure Authentication System
📂 Project Files
File Name	Purpose
main.dart	Application entry point
login_screen.dart	User login interface
register_screen.dart	New user registration
main_page.dart	Home/dashboard page
find_worker_screen.dart	Worker search and listing
profile_screen.dart	User and worker profile management
upload_post_screen.dart	Upload worker service posts
api_service.dart	API communication handling
server.js	Backend server and APIs
⚙️ System Functionality
Authentication
Secure user login and registration
User session management
Authentication validation
Worker Management
Create and update worker profiles
Add skills and service information
Manage worker details
Service Posting
Workers can upload service/job posts
Post descriptions and service details
Display available worker services
Worker Search
Find workers based on service category
Browse available workers
View worker profile information
🗄️ Database Schema (MongoDB Collections)
Collection	Key Fields
users	_id, name, email, password, role
workers	_id, worker_name, skill, location, experience, contact
posts	_id, worker_id, title, description, createdAt
services	_id, category_name, service_type
bookings	_id, customer_id, worker_id, booking_date, status
🚀 Run Locally
Prerequisites
Flutter SDK
Node.js v18+
MongoDB
Android Studio / VS Code
Step 1 — Clone the Repository
git clone https://github.com/YOUR_USERNAME/worknet-connect.git
cd worknet-connect
Step 2 — Install Flutter Dependencies
flutter pub get
Step 3 — Run Flutter Application
flutter run
Step 4 — Setup Backend Server
npm install
node server.js
📁 Project Structure
worknet-connect/
│
├── api_service.dart
├── find_worker_screen.dart
├── login_screen.dart
├── main.dart
├── main_page.dart
├── profile_screen.dart
├── register_screen.dart
├── upload_post_screen.dart
├── server.js
└── README.md
✨ Advantages of WorkNet Connect
Easy worker discovery platform
Helps local workers get more opportunities
Simple and user-friendly interface
Fast communication between customers and workers
Mobile-friendly cross-platform application
🎯 Future Enhancements
Real-time chat system
Online payment integration
Worker ratings and reviews
GPS-based worker tracking
Push notifications
Multi-language support
