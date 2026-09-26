const express = require('express');
const { connectDB } = require('./config/db.mongo.js');

// Each route module owns one part of the API. The server imports those routers
// here and later mounts them under a shared URL prefix.
const healthRoutes = require('./routes/healthRoutes.js');
const userRoutes = require('./routes/userRoute.js');
const productRoutes = require('./routes/productRoutes.js');

const app = express();

// These prefixes are added before the paths declared inside each router.
// For example, /api/users plus /users becomes /api/users/users.
app.use('/api', healthRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 8000;

// Start the database connection and HTTP server when this entry file runs.
connectDB();

app.listen(PORT, '0.0.0.0', () => {
    console.log(`server is running on port http://localhost:${PORT}`);
});