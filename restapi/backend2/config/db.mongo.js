const mongoose = require('mongoose');
require('dotenv').config();

// Check the environment before attempting a connection. This allows the API
// to start for health checks even when a database URL has not been supplied.
const inMongoConfigured = () => {
    return (
        typeof process.env.MONGODB_URI === 'string' && process.env.MONGODB_URI.trim() !== '' && !process.env.MONGODB_URI.includes('<')
    );
};

// Connect once during application startup. Await pauses this function until
// MongoDB accepts or rejects the connection attempt.
const connectDB = async () => {
    if (!inMongoConfigured()) {
        console.warn('Warning: MONGODB_URI is not configured. Starting the API without a database connection.');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Success: MongoDB Atlas connected successfully');
    } catch (error) {
        console.error('Error: MongoDB connection failed:', error.message);
    }
};

// Controllers can call this before database operations and return a clear 503
// response instead of trying to query a database that is not connected.
const encureDatabace = (res) => {
    if (mongoose.connection.readyState !== 1) {
        res.status(503).json({
            success: false,
            error: "'Database is not configured or unavailable. Add a valid MONGODB_URI to enable data operations.',"
        });
        return false;
    }
    return true;
};

// Export the connection helpers for the server and controllers.
module.exports = {
    connectDB,
    encureDatabace,
    inMongoConfigured
};
