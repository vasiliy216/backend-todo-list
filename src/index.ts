import express from 'express';
import dotenv from 'dotenv';
import { createServer } from 'http';
import cors from 'cors'

dotenv.config();

import './core/db'
import { CreateRoutes, CreateSocket } from './core/index'

const app = express();
const http = createServer(app);
const io = CreateSocket(http)

app.use(cors());

CreateRoutes(app, io);

const PORT: number | string = process.env.PORT || 3003;

app.use("*", (req, res) => {
    res.send("<h1>Welcome to the todo server!</h1>");
});

http.listen(PORT, () => {
    console.log(`The server is running on the port : ${PORT}`);
})