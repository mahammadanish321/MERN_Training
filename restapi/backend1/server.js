const express = require('express');
const dbconnection = require('./config/db.mongo.js')
// const mongoose = require('mongoose');
const user_routes = require('/home/mahammadanish/Coding/MERN/myMERN/restapi/backend1/routes/user.routes.js')

const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'backend API is running',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'dinconnected',
    })
})
app.use('/api',user_routes);


const PORT = process.env.PORT || 8000;
dbconnection().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port http://localhost:${PORT}`);

    });
});