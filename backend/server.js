import express from "express";
import dotenv from 'dotenv';
import colors from 'colors';
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import { errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.get('/', (req, res) => {
    res.send('Welcome to the Task Management API');
})

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/employees',employeeRoutes);

// app.use(errorHandler);
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("front/build"));
//     const path = require('path')
//     app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'front', 'build', 
//     'index.html'))
//     })
// }
app.listen(PORT, () => console.log(`Server running on ${PORT} port`.yellow.bold));
