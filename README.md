# FinTrack – Personal Finance Manager

**Author:** K.Shanmukh Sai

## Project Idea
A cloud-deployed MERN web application that helps users track income, expenses, and savings goals in real time.
It features secure authentication, AI-based auto-categorization of expenses, interactive data visualizations, and a payment simulation using Razorpay.

### Highlights
- Secure JWT authentication (register/login)
- Add / edit / delete transactions with categories (Food, Travel, Shopping, Bills, etc.)
- Simple AI-based auto-categorization (keyword-based) as a placeholder for an ML model
- Charts for spending breakdown (Chart.js)
- Simulated Razorpay integration (order creation) for testing
- Light, clean UI theme

## What I changed (customization)
- Project name: **FinTrack**
- Light & clean color theme
- README personalized with your name

## Quick setup (development)
### Prerequisites
- Node.js (16+), npm
- MongoDB (or MongoDB Atlas)

### Server
```
cd server
cp .env.example .env
# edit .env to add MONGODB_URI and JWT_SECRET
npm install
npm run dev
```

### Client
```
cd client
npm install
npm start
```

Open http://localhost:3000 (client) and http://localhost:5000 (server)

## How to push to your GitHub (make it your own)
1. Delete the existing `.git` folder (our packaged scaffold doesn't include one).
2. Initialize a new repo and push:
```
git init
git add .
git commit -m "Initial commit - FinTrack personal finance manager"
git branch -M main
git remote add origin https://github.com/<your-username>/fintrack.git
git push -u origin main
```

## Resume bullet (copy-paste)
**FinTrack — Full-Stack MERN Application**  
Developed and deployed a personal finance manager using MongoDB, Express, React, and Node.js. Features secure authentication, transaction CRUD, AI-based auto-categorization of expenses, interactive charts for spending analysis, and Razorpay payment simulation. Code hosted on GitHub.

## Notes & Next steps
- The auto-categorization is a simple keyword-based approach (utils/categorize.js). Replace with an ML model or 3rd-party AI service (OpenAI, AWS Comprehend) when you have time.
- For production, secure environment variables, enable HTTPS, and use a stable deployment (Render/Heroku/Vercel + MongoDB Atlas).
