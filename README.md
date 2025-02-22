# Real-Time News Feed Application (MERN + Redux + Socket.io)

## 🚀 Overview
This is a **Real-Time News Feed Application** built with the **MERN** stack, incorporating **Redux** for state management and **Socket.io** for real-time updates. Users can subscribe to different news categories, receive **live updates**, and view trending news.

## 🏗 Tech Stack
- **Frontend:** React.js, Redux, TypeScript, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js, TypeScript, MongoDB, Socket.io
- **Database:** MongoDB (with Aggregation & Indexing for performance)
- **Real-Time Updates:** WebSockets via Socket.io
- **Hosting:** Vercel (Frontend) & Render (Backend)

## 🌟 Features
✅ **Real-Time News Feed:** Fetches and updates news articles dynamically using WebSockets.
✅ **Category Subscriptions:** Users can filter news by category (Tech, Business, Sports, etc.).
✅ **Trending News:** Uses MongoDB Aggregation to fetch trending articles.
✅ **Authentication:** Users can sign up, sign in, and access personalized news feeds.
✅ **State Management:** Redux is used to manage authentication, user preferences, and news.
✅ **Secure API:** Includes authentication middleware and rate-limiting.
✅ **Deployed & Accessible:** The app is hosted on Vercel & Render.

---

## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Dev-kaif/newsFeed.git
cd newsFeed
```

### **2️⃣ Backend Setup**
```sh
cd backend
npm install
```

Create a `.env` file in the `backend/` directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NEWS_API_KEY=your_newsapi_org_key
JWT_SECRET=your_secret_key
```

Run the backend server:
```sh
npm run dev
```

### **3️⃣ Frontend Setup**
```sh
cd frontend
npm install
```

Create a `.env` file in the `frontend/` directory:
```env
VITE_BACKEND_URL=http://localhost:5000
```

Run the frontend:
```sh
npm run dev
```

---

## 🚀 Deployment
### **1️⃣ Deploy Backend to Render**
- Push the backend code to GitHub.
- Create a new **Render Web Service**.
- Set **Environment Variables** in Render based on your `.env` file.
- Deploy and get the live **backend URL**.

### **2️⃣ Deploy Frontend to Vercel**
- Push the frontend code to GitHub.
- Create a **new Vercel project**.
- Set `VITE_BACKEND_URL` to the Render backend URL.
- Deploy and get the **live frontend URL**.

---

## 📌 API Documentation
The backend API is documented using **Swagger/Postman**.

- **Base URL:** `https://your-backend-url.com/api`
- Example Endpoints:
  - `POST /api/auth/signUp` → User registration
  - `POST /api/auth/signIn` → User login
  - `GET /api/news` → Fetch latest news
  - `GET /api/news/trending` → Fetch trending news

---

## 🎨 UI/UX Design
- **Primary Theme:** Blue (`#007bff`)
- **Dark Mode:** Implemented
- **Animations:** Hover effects and smooth transitions

---

## 🛠 Future Improvements
🔹 Implement bookmarking for articles
🔹 Add multi-language support
🔹 Improve news filtering options

---


