
```markdown
# 💰 MERN Expense Tracker

A full-stack expense tracking application built with the **MERN** stack (MongoDB, Express.js, React.js, Node.js).  
It allows users to track income & expenses, view history, and visualize financial data.

---

## 🚀 Features

- 📌 Add income & expenses with categories
- 🗑 Delete transactions
- 📊 View total balance, income, and expenses
- 📜 Transaction history
- 🖥 Responsive UI for mobile & desktop
- ⚡ Fast & optimized backend with Express
- 💾 MongoDB for persistent storage

---

## 🛠 Tech Stack

**Frontend**:
- React.js
- Axios (API requests)
- Context API / Redux (State Management)
- CSS / Tailwind (Styling)

**Backend**:
- Node.js
- Express.js
- MongoDB & Mongoose
- CORS

---

## 📂 Project Structure

```

mern-expense-tracker/
│
├── backend/           # Express server & MongoDB logic
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API routes
│   ├── controllers/   # Request handling
│   ├── config/        # DB config
│   └── server.js      # Entry point
│
├── frontend/          # React application
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
│
└── README.md

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
````

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

### 3️⃣ Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 4️⃣ Configure Environment Variables

Create a `.env` file inside `backend/` and add:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

You can get a free MongoDB connection string from [MongoDB Atlas](https://www.mongodb.com/atlas).

### 5️⃣ Run Backend

```bash
cd backend
npm start
```

Or for development:

```bash
npm run dev
```

### 6️⃣ Run Frontend

In another terminal:

```bash
cd frontend
npm start
```

---

## 🖥 Running the App

* Backend runs on: **[http://localhost:5000](http://localhost:5000)**
* Frontend runs on: **[http://localhost:3000](http://localhost:3000)**

---

## 📌 API Endpoints

| Method | Endpoint               | Description          |
| ------ | ---------------------- | -------------------- |
| GET    | /api/transactions      | Get all transactions |
| POST   | /api/transactions      | Add a transaction    |
| DELETE | /api/transactions/\:id | Delete transaction   |

---

## 📷 Screenshots

<img width="1878" height="700" alt="image" src="https://github.com/user-attachments/assets/662b07bd-542c-41b9-bfaa-008a542c9f94" />

<img width="1887" height="630" alt="image" src="https://github.com/user-attachments/assets/b04a748a-e7be-467e-a432-3da29692455f" />

<img width="1877" height="525" alt="image" src="https://github.com/user-attachments/assets/9a826b1f-24ab-495a-b918-3cb7b6975f31" />

<img width="419" height="519" alt="image" src="https://github.com/user-attachments/assets/7c3eef69-afb0-49ed-9b18-b96a288f57d0" />



---

## 🚀 Deployment

You can deploy the **frontend** on **Vercel** or **Netlify**, and the **backend** on **Render**, **Heroku**, or **Railway**.

---



## 👨‍💻 Author

Karnena Shanmukha sai
karnena.shanmukha2022@vitstudent.ac.in


