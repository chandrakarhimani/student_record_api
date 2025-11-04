# 📚 MERN Student Record Management System

This is a full-stack **Student Record Management Application** built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
It allows users to **Create, Read, Update and Delete (CRUD)** student records from a clean UI.

The backend provides a secure REST API to manage student data, while the frontend is a responsive React app styled with **Tailwind CSS**.

---

## 🌐 Live Demo

You can access the deployed project here:

| Service | Link |
|---------|------|
| 🖥️ Frontend | https://frontend-student-record-api.onrender.com/ |
| ⚙️ Backend API | https://backend-student-record-api.onrender.com/ |

✅ Fully working CRUD  
✅ Connected to MongoDB Atlas  
✅ Tailwind UI + Axios API calls  
✅ Deployed on Render  

---

## ✨ Features

✔️ Add new student records  
✔️ View all students  
✔️ Edit student details  
✔️ Delete student  
✔️ Fully responsive UI using Tailwind  
✔️ REST API built with Express + MongoDB  
✔️ Frontend & Backend deployed separately  

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React (Vite), Tailwind CSS, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas + Mongoose |
| **Testing** | Postman |
| **Deployment** | Render.com |

---

## 📂 Project Structure

```

student_record_api/
│
├── backend/        # Express server
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── .env
│
├── client/         # React frontend (Vite + Tailwind)
│   ├── src/
│   ├── App.jsx
│   ├── index.css
│   └── tailwind.config.js
│
└── README.md

````

---

## 🏁 Getting Started (Local Setup)

### ✅ 1. Backend Setup (`/backend`)

```bash
cd backend
npm install
````

Create `.env` file inside backend:

```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

Run server:

```bash
npm run dev
```

Your API will run at:
`http://localhost:5000`

---

### ✅ 2. Frontend Setup (`/client`)

```bash
cd client
npm install
npm run dev
```

Frontend will run at:
`http://localhost:5173`

If needed, update API base URL inside:

```
client/src/api.js
```

---

## 📖 API Endpoints (CRUD)

| Method   | Endpoint            | Description      |
| -------- | ------------------- | ---------------- |
| `GET`    | `/api/students`     | Get all students |
| `POST`   | `/api/students`     | Add new student  |
| `PUT`    | `/api/students/:id` | Update student   |
| `DELETE` | `/api/students/:id` | Delete student   |

---

## 🧪 Postman Testing

✔️ GET → Fetch students
✔️ POST → Add student
✔️ PUT → Update student
✔️ DELETE → Remove student

---

## 🚀 Deployment

| Part     | Platform             |
| -------- | -------------------- |
| Frontend | Render (Static)      |
| Backend  | Render (Node server) |
| Database | MongoDB Atlas        |

---

## 🤝 Contributing

Feel free to fork the repo & submit PRs.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👤 Author

**Himani Chandrakar**
