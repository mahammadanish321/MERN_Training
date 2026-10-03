import express from 'express';
import mongoose from 'mongoose';
import userRouter from "./routes/user.router.js";
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;


async function connectMongoDB() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('mongodb connected succesfully');

        app.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}`);
        });

    } catch (err) {
        console.error(`mongodb not connected succesfully becuse${err.message}`)
    }
}

connectMongoDB();

app.get('/health', (req, res) => {
    res.status(404).json({
        // status: 'ok'
        success: false,
        message: 'hello i am not working'
    });
});

app.use(express.json());
app.use('/user', userRouter)

export default app;


