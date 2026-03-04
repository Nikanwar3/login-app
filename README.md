# 🔐 Login Application

**Authority Entrepreneurs — Full-Stack Assignment**

A secure Login Application built with **React** (frontend) and **Node.js/Express** (backend). Users can log in with credentials, get redirected to a Welcome page, and have their username remembered for subsequent logins.

---

## ✨ Features

- ✅ Login page with username and password fields
- ✅ Navigation to Welcome page upon successful login
- ✅ Error message display for incorrect credentials
- ✅ Remember username for subsequent logins (localStorage)
- ✅ Protected route — Welcome page redirects to login if unauthenticated
- ✅ Logout functionality
- ✅ Loading spinner during API call
- ✅ Responsive design (mobile, tablet, desktop)

## 🔒 Security Enhancements

- ✅ **bcrypt** — Passwords hashed before comparison
- ✅ **dotenv** — Environment variables for sensitive configuration
- ✅ **express-rate-limit** — Rate limiting to prevent brute-force attacks (100 req/15 min)
- ✅ **CORS** — Cross-Origin Resource Sharing enabled
- ✅ **Input validation** — Server-side validation for empty fields

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, React Router v6, Axios |
| Backend | Node.js, Express.js |
| Security | bcrypt, express-rate-limit, dotenv |
| Styling | Custom CSS (Glassmorphism dark-mode UI) |

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Nikanwar3/login-app.git
cd login-app
```

### 2. Start the Backend
```bash
cd backend
npm install
node server.js
```
Backend runs on `http://localhost:5000`

### 3. Start the Frontend
```bash
cd frontend
npm install
npm start
```
Frontend runs on `http://localhost:3000`

### 4. Test the Application
- Navigate to `http://localhost:3000`
- **Username:** `admin`
- **Password:** `admin`
- Click Login → redirected to Welcome page
- Test incorrect credentials → error message shown

---

## 📁 Project Structure

```
login-app/
├── backend/
│   ├── server.js          # Express server with /login endpoint
│   ├── .env               # Environment variables
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js         # Router setup
│   │   ├── Login.js       # Login page component
│   │   ├── Welcome.js     # Welcome page component
│   │   ├── index.js       # React entry point
│   │   └── index.css      # Glassmorphism styling
│   └── package.json
├── .gitignore
└── README.md
```

---

## 📡 API Endpoints

| Method | Endpoint | Description | Status Codes |
|--------|----------|-------------|-------------|
| POST | `/login` | Validate credentials | 200 (success), 401 (invalid), 400 (missing fields), 429 (rate limited) |
| GET | `/health` | Server health check | 200 |

---

## 📝 Default Credentials
| Username | Password |
|----------|----------|
| admin | admin |

---

Built by **Nidhi Kanwar**
