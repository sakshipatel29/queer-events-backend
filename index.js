import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import express from 'express';
import {eventsRouter} from './routes/events.js';
import { signUpRouter } from './routes/signup.js';

const app = express();
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

mongoose.set("strictQuery", true);

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use("/events", eventsRouter);
app.use("/sign-up", signUpRouter);

const db = async () => {
    console.log(`Connecting to database at ${process.env.MONGODB_URL}`);

    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Connected to database at ${process.env.MONGODB_URL}`)
    } catch (error) {
        console.log(`Database error ${error.message}`)
    }
}

db();

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`)
})