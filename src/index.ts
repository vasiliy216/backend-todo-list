import express from 'express';
import dotenv from 'dotenv';
import { createServer } from 'http';

dotenv.config();

import './core/db'
import createRoutes from './core/routes'

const app = express();
const http = createServer(app);

createRoutes(app);

const PORT: number = process.env.PORT ? Number(process.env.PORT) : 3003;

http.listen(PORT, () => {
    console.log(`The server is running on the port : ${PORT}`);
})