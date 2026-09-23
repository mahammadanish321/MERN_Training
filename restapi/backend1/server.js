const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.get('/api/health',(req, res)=>{
    res.json({
        status:'ok',
        message:'backend API is running',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'dinconnected',
    })
})


const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
    
});