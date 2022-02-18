import express from 'express';
import dotenv from 'dotenv';
import { createServer } from 'http';

dotenv.config();

import './core/db'
import createRoutes from './core/routes'

const app = express();
const http = createServer(app);

createRoutes(app);

const PORT: number | string = process.env.PORT || 3003;

app.use("*", (req, res) => {
    res.send("<h1>Welcome to the todo server!</h1>");
});

http.listen(PORT, () => {
    console.log(`The server is running on the port : ${PORT}`);
})