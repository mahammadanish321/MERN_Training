const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
const { connectDB } = require('./config/db.mongo');
const errorHandler = require('./middlewares/errorHandler');
const rateLimiter = require('./middlewares/rateLimiter');
const healthRoutes = require('./routes/healthRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');


const app = express();

app.use(helmet());
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
}



// CORS Configuration
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:4200',
  'http://127.0.0.1:4200',
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin) || allowedOrigins.length === 0) {
        callback(null, true);
        return;
      }
      callback(new Error('Not allowed by CORS policy'));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);


//body parsers & Limiting
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter(200, 15 * 60 * 1000));

app.use('/api', healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);


// Root API Welcome / Directory (RBAC = role base autharization)
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to the REST API with Authentication & RBAC Authorization',
    endpoints: {
      health: '/api/health',
      version: '/api/version',
      auth: {
        register: 'POST /api/auth/register',
        login: 'POST /api/auth/login',
        me: 'GET /api/auth/me (Bearer Token required)',
        updateDetails: 'PUT /api/auth/updatedetails (Bearer Token required)',
        updatePassword: 'PUT /api/auth/updatepassword (Bearer Token required)',
      },
      users: {
        getAll: 'GET /api/users (Admin only)',
        create: 'POST /api/users (Admin only)',
        getById: 'GET /api/users/:id (Admin only)',
        update: 'PUT /api/users/:id (Admin only)',
        delete: 'DELETE /api/users/:id (Admin only)',
      },
      products: {
        getAll: 'GET /api/products (Public)',
        getById: 'GET /api/products/:id (Public)',
        create: 'POST /api/products (Admin / Moderator only)',
        update: 'PUT /api/products/:id (Admin / Moderator only)',
        delete: 'DELETE /api/products/:id (Admin only)',
      },
    },
  });
});


app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `Route ${req.method} ${req.originalUrl} not found`
  });
});

app.use(errorHandler);






//server Initializtion

let server;

const PORT = process.env.PORT || 5000;

connectDB();

if (require.main === module) {
  server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  });
}


process.on('unhandledRejection', (err) => {
  console.error(`unhandled Rejection: ${err.message}`);
})


process.on('uncaughtException', (err) => {
  console.error(`Uncauth Exption: ${err.message}`);
})

module.exports = app;
