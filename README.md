# 📌 **WorkNet Connect**

> **Local Worker Hiring & Service Marketplace Platform**

WorkNet Connect is a full-stack, cross-platform mobile application designed to bridge the gap between everyday users and nearby skilled workers. Whether someone needs an electrician, plumber, carpenter, painter, or cleaner, WorkNet Connect simplifies local job discovery and streamlines communication through a fast, reliable, and user-friendly mobile interface.

---

## 🛠️ **Tech Stack**

| Layer | Technology |
| :--- | :--- |
| **Frontend** | Flutter (Dart) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **API Architecture** | REST API |
| **Authentication** | JWT (JSON Web Tokens) / Session-Based |
| **Development Tools** | VS Code / Android Studio |

---

## 📱 **Main Features**

*   **Secure Authentication:** User registration, login, and session management powered by JWT.
*   **Dual-Role Profiles:** Separate flows and profile management for customers and workers.
*   **Smart Worker Discovery:** Search, filter, and browse local workers by service category and location.
*   **Service Postings:** Workers can upload, update, and manage service/job posts detailing their expertise.
*   **Seamless Interaction:** Quick access to worker details and contact information to jumpstart communication.
*   **Responsive UI:** A clean, modern Flutter interface optimized for both Android and iOS devices.

---

## 📁 **Project Structure**

```text
worknet-connect/
├── client/                     # Flutter Frontend Application
│   ├── lib/
│   │   ├── api_service.dart          # Centralized API communication handler
│   │   ├── find_worker_screen.dart   # Worker search, filtering, and listings
│   │   ├── login_screen.dart         # User login interface
│   │   ├── main.dart                 # Application entry point
│   │   ├── main_page.dart            # Home dashboard / main navigation
│   │   ├── profile_screen.dart       # User & worker profile management
│   │   ├── register_screen.dart      # New user registration screen
│   │   └── upload_post_screen.dart   # Portal for workers to publish service posts
│   └── pubspec.yaml            # Flutter dependencies configuration
│
└── server/                     # Node.js Backend API
    ├── server.js               # Backend entry point, server configuration, and REST endpoints
    ├── package.json            # Node.js dependencies
    └── README.md               # Project documentation
