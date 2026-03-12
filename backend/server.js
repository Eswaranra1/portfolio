import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
import connectDB from './config/db.js';
import projectRoutes from './routes/projectRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

connectDB();

const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginResourcePolicy: { policy: 'cross-origin' },
}));
app.use(mongoSanitize());

// Rate limiting - 100 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: 'Too many requests, please try again later.' },
});
app.use('/api/', limiter);

// Stricter rate limit for contact form - 5 per 15 minutes
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many contact attempts. Please try again later.' },
});
app.use('/api/contact', contactLimiter);

// CORS - allow frontend origin(s)
const allowedOrigins = [process.env.FRONTEND_URL || 'http://localhost:5173']
  .flatMap((url) => url.split(',').map((u) => u.trim()))
  .filter(Boolean);

const isAllowedOrigin = (origin) => {
  if (!origin) return true;
  if (allowedOrigins.includes(origin)) return true;
  if (origin.endsWith('.vercel.app')) return true;
  return false;
};

app.use(cors({
  origin: (origin, callback) => {
    callback(null, isAllowedOrigin(origin));
  },
  credentials: true,
  optionsSuccessStatus: 200,
}));

// Body parser
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Root - API info
app.get('/', (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  res.json({
    success: true,
    message: 'Portfolio API is running',
    api: `${baseUrl}/api`,
    endpoints: ['/api', '/api/health', '/api/projects', '/api/skills', 'POST /api/contact'],
  });
});

// API Routes
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/contact', contactRoutes);

// API root & health check
app.get('/api', (req, res) => {
  res.json({ success: true, message: 'Portfolio API is running' });
});
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Portfolio API is running' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' ? 'Server error' : err.message,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
