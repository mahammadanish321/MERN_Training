const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();


const { connectDB } = require('./config/db.mongo');
const rateLimiter = require('./middlewares/rateLimiter');
const errorHandler = require('./middlewares/errorHandler');





const healthRoutes = require('./routes/healthRoutes');
const userRoutes = require('./routes/userRoute');
const productRoutes = require('./routes/productRoutes');




const app = express();
const allowedOrigins = [
    process.env.FRONTEND_URL,
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://localhost:4200',
    'http://127.0.0.1:4200',
].filter(Boolean);

app.use(helmet());
app.use(morgan('combined'));
app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
                return;
            }
            callback(new Error("Not allowed by CORS"));
        },
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: true,
    }),
);

app.use(express.json());
app.use(rateLimiter(200, 15 * 60 * 1000));

app.use("/api", healthRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);


app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: `Route ${req.method} ${req.originalUrl} not found`,
    });
});

app.use(errorHandler);


const PORT = process.env.PORT || 5000;

connectDB();


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});