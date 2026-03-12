# Portfolio - Esakki Muthu Eswaran S

A production-grade full-stack MERN developer portfolio with modern UI/UX, dark/light mode, and deployment-ready configuration.

**Live:** [portfolio-eswaran.vercel.app](https://portfolio-eswaran.vercel.app/)

## Tech Stack

**Frontend:** React (Vite), TailwindCSS, Framer Motion, React Router, Axios, React Icons  
**Backend:** Node.js, Express.js, MongoDB (Mongoose), Dotenv, CORS, Helmet, Express Validator  
**Deployment:** Frontend → Vercel | Backend → Render | Database → MongoDB Atlas

## Project Structure

```
Portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── sections/       # Page sections (Hero, About, etc.)
│   │   ├── pages/          # Route pages
│   │   ├── hooks/          # Custom React hooks
│   │   ├── utils/          # Constants and utilities
│   │   ├── services/       # API services
│   │   └── App.jsx
│   └── package.json
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
└── README.md
```

## Local Development

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MONGODB_URI
npm run dev
```

### Seed Database (Optional)

```bash
cd backend
npm run seed
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

- Frontend: http://localhost:5173  
- Backend API: http://localhost:5000

### Environment Variables

**Backend (.env):**
```
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**Frontend (.env):**
```
VITE_API_URL=http://localhost:5000/api
```

For production, set `VITE_API_URL` to your deployed backend URL (e.g., `https://your-api.onrender.com/api`).

---

## Deployment Guide

### 1. Create MongoDB Atlas Cluster

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and log in
3. Click **Build a Database** → Choose **M0 Free** tier
4. Select a cloud provider and region (e.g., AWS, closest to your users)
5. Create cluster
6. Under **Security** → **Database Access** → Add Database User
   - Create username and password (save securely)
7. Under **Security** → **Network Access** → Add IP Address
   - Add `0.0.0.0/0` for development (or restrict for production)
8. Click **Connect** on your cluster → **Connect your application**
9. Copy the connection string (e.g., `mongodb+srv://user:pass@cluster.mongodb.net/portfolio`)

### 2. Deploy Backend to Render

1. Go to [Render](https://render.com) and sign up
2. Click **New** → **Web Service**
3. Connect your GitHub repository
4. Configure:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free
5. Add Environment Variables:
   - `MONGODB_URI` = Your Atlas connection string
   - `NODE_ENV` = `production`
   - `FRONTEND_URL` = Your Vercel URL (e.g., `https://your-portfolio.vercel.app`)
   - `PORT` = `5000` (Render sets this automatically)
6. Deploy
7. Note your backend URL (e.g., `https://portfolio-api-xxxx.onrender.com`)

### 3. Deploy Frontend to Vercel

1. Go to [Vercel](https://vercel.com) and sign up
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Configure:
   - **Root Directory:** `frontend`
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Add Environment Variable:
   - `VITE_API_URL` = `https://portfolio-backend-a3z0.onrender.com/api`
6. Deploy
7. Note your frontend URL (e.g., `https://your-portfolio.vercel.app`)

### 4. Update Backend CORS (Critical)

After deploying the frontend, **update `FRONTEND_URL` on Render** to your actual Vercel URL. This fixes Bad Gateway / CORS errors.

- Render Dashboard → Your backend service → **Environment** → **Environment Variables**
- Set `FRONTEND_URL` = `https://portfolio-eswaran.vercel.app` (your Vercel URL)
- For multiple origins (e.g. preview URLs): `https://portfolio.vercel.app,https://portfolio-xxx.vercel.app`
- Click **Save** → **Manual Deploy** to redeploy

### 5. Add Resume

Place your resume PDF in `frontend/public/resume.pdf` so the download button works. Commit and push to trigger a new Vercel deployment.

### 6. Connect Custom Domain (Optional)

**Vercel (Frontend):**
- Project Settings → Domains → Add your domain
- Update DNS as instructed (A record or CNAME)

**Render (Backend):**
- Service Settings → Custom Domain → Add domain
- Update DNS with the provided CNAME

### 7. Enable HTTPS

Vercel and Render provide HTTPS by default. Ensure:
- `FRONTEND_URL` and `VITE_API_URL` use `https://`
- MongoDB Atlas connection string uses `mongodb+srv://` (TLS by default)

---

## API Endpoints

| Method | Endpoint        | Description          |
|--------|-----------------|----------------------|
| GET    | /api/projects   | Fetch all projects   |
| GET    | /api/skills     | Fetch all skills     |
| POST   | /api/contact    | Submit contact form  |
| GET    | /api/health     | Health check         |

---

## Features

- Hero with animated introduction
- About section with professional summary
- Skills with animated skill bars (from API or fallback)
- Experience timeline
- Projects with GitHub links and hover effects
- Education section
- Contact form (saved to MongoDB)
- Dark/Light mode toggle
- Smooth scrolling
- Framer Motion animations
- Responsive design
- SEO meta tags
- Loading skeletons
- Rate limiting and input validation
- Helmet security headers

---

## License

MIT
