const mongoose = require('mongoose');
require('dotenv').config();

const mongodburi = process.env.MONGODB_URI;

const connectDB = async()=>{
    try{
        await mongoose.connect(mongodburi)
        console.log(`Success: mongodb connected succesfully`);
        
    }
    catch(error){
        console.error(`Error: MongoDB connection Error:${error.messege}`);        
    }
}

module.exports = connectDB;