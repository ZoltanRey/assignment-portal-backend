# assignment-portal-backend
A backend system for an Assignment Submission Portal using Node.js, Express.js, and MongoDB. Users can register, log in, and upload assignments tagged to admins. Admins can review, accept, or reject submissions. Features include secure JWT authentication, role-based access control, RESTful APIs, and modular design. Perfect for managing assignments!
# Assignment Submission Portal Backend

The **Assignment Submission Portal** Backend is a robust system designed to manage assignment submissions and review processes between users and admins. Built with **Node.js**, **Express.js**, and **MongoDB**, it ensures secure authentication, smooth interactions, and scalable architecture.

---

## 🚀 Features

### 🌟 For Users
- **Register & Login**: Secure user authentication.
- **Assignment Uploads**: Submit assignments tagged to a specific admin.
- **Admin Listing**: View all available admins to assign tasks.

### 🌟 For Admins
- **Assignment Review**: View all assignments tagged to you.
- **Approval System**: Accept or reject submitted assignments with ease.

### 🔒 Security
- **JWT Authentication**: Secure session management.
- **Password Hashing**: Implements **bcrypt** for safe password storage.

---

## 🛠️ Tech Stack

- **Node.js** & **Express.js**: Backend framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing users, admins, and assignments.
- **JWT (JSON Web Tokens)**: Authentication mechanism.
- **bcrypt**: For encrypting user passwords.

---

## 📦 Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **MongoDB** (running locally or via a hosted service)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repository-name>.git
   cd <your-repository-name>
