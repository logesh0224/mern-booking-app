//import { responsiveFontSizes } from '@mui/material';
import express,{ Request,Response} from 'express';
import cors from "cors";
import "dotenv/config";
import mongoose from 'mongoose';
import authRoutes from "./routes/auth"
import userRoutes from './routes/users';
import cookieParser from "cookie-parser";
import path from "path"
import { dot } from 'node:test/reporters';
//const uri ="mongodb+srv://logeshboopathi:logeshboopathi@cluster0.4ax9iot.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=>console.log("Connected to database: ",
process.env.MONGODB_CONNECTION_STRING));



//mongoose.connect('mongodb://127.0.0.1:27017/admin')

const app= express();
//dot.config(
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin:process.env.FRONTEND_url,
    credentials:true
}));
app.use(express.static(path.join(__dirname,"../../frontend/dist")))

const PORT=8111;
app.use("/api/auth",authRoutes)
app.use("/api/users" ,userRoutes)
app.listen(PORT,() =>{
    console.log(`Connected to Port ${PORT}`)

})