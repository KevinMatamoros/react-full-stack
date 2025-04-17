# MERN Blog App 📝

A basic blog application built using the MERN stack (MongoDB, Express, React, and Node.js). It allows users to browse and read blog posts.

> ⚠️ Note: This is a **read-only** blog. Creating, editing, or deleting posts is not enabled.

## 🧰 Tech Stack

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB (via Mongoose)

## ⚙️ Features

- View a list of all blog posts
- Read full content of individual posts
- Responsive and clean UI

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mern-blog.git
cd mern-blog
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file and add the following:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern-blog
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

### 4. Open the App

Navigate to: [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
mern-blog/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
```

## 🛠 Useful Scripts

### Backend

```bash
npm run dev     # Runs the backend with nodemon
```

### Frontend

```bash
npm start       # Starts React development server
```

## 📌 Notes

- Ensure MongoDB is running locally on your machine.
- You can update the `MONGO_URI` to connect to a MongoDB Atlas cloud instance if preferred.

## 📄 License

This project is licensed under the MIT License.