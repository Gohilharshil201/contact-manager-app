# 📒 Contact Manager App

A full-stack **Contact Manager** application built with **React**, **Express**, **MongoDB**, and **Ant Design**.

## 🔥 Features

- 🔐 Secure user authentication with JWT
- 📇 Add, edit, and delete contacts
- 🔎 Clean, responsive UI with Ant Design
- 💾 Persistent storage using MongoDB
- 🧼 Separate frontend and backend codebases
- 🧠 Protected routes and state-based navigation

---
```bash
## 📁 Project Structure
contact-manager-app/
├── backend/ # Express + MongoDB API
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API route handlers
│ ├── controllers/ # Logic for each route
│ ├── middleware/ # Auth middleware
│ └── server.js # Entry point
├── frontend/ # React + Ant Design UI
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components
│ ├── api.js # Axios API client
│ ├── App.jsx # Main routes
│ └── index.js # App bootstrap
└── README.md

```
---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local or cloud)
- npm or yarn

---

## ⚙️ Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/contact-manager-app.git
cd contact-manager-app

2️⃣ Backend Setup

cd backend
npm install

Create a .env file in the backend/ directory:

PORT=5000
MONGO_URI=mongodb://localhost:27017/contactmanager
JWT_SECRET=your_jwt_secret_key

Start the backend server:

npm run dev

3️⃣ Frontend Setup

cd ../frontend
npm install

Start the React app:

npm run dev

```
🌐 API Endpoints
🔐 Authentication
| Endpoint             | Method | Description            |
| -------------------- | ------ | ---------------------- |
| `/api/auth/register` | POST   | Register a new user    |
| `/api/auth/login`    | POST   | Login an existing user |

📇 Contacts (Protected)
| Endpoint            | Method | Description       |
| ------------------- | ------ | ----------------- |
| `/api/contacts`     | GET    | Get all contacts  |
| `/api/contacts`     | POST   | Add a new contact |
| `/api/contacts/:id` | PUT    | Update a contact  |
| `/api/contacts/:id` | DELETE | Delete a contact  |

🛠 Tech Stack

🖥 Frontend

    React + Vite
    
    React Router
    
    Ant Design
    
    Axios

🌐 Backend

    Node.js
    
    Express.js
    
    MongoDB + Mongoose
    
    JSON Web Tokens (JWT)

🧪 Future Improvements

    🔍 Add search and filtering

    🧾 Pagination

    🧪 Testing (Jest / React Testing Library)

    ☁️ Deployment (Render + Vercel)

    🧑‍💼 User profile management

📄 License

This project is licensed under the MIT License.
See the LICENSE file for more details.

📚 Acknowledgments

    React

    Ant Design

    MongoDB

    Express

    Vite

👨‍💻 Author

Made with ❤️ by @Gohilharshil201
