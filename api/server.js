import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import studentRouter from './routes/student.js';
import userRouter from './routes/user.js';
import productRouter from './routes/product.js';
import mongoDBConnection from './config/db.js';
import errorHandler from './middleware/errorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


// initalize express
const app = express();
// Configure dotenv
dotenv.config();

// middleware permision
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(cors());

// initialize environmet 
const PORT = process.env.SERVER_PORT || 5000;

// Routes
app.use('/api/student', studentRouter)
app.use('/api/user', userRouter)
app.use('/api/v1/product', productRouter);

app.use(express.static('api/public'));

// Custom error handler middleware
app.use( errorHandler );


// Listen
app.listen(PORT, () => {
    mongoDBConnection();
    console.log(`server on running on port ${ PORT }`.bgGreen.black);
})