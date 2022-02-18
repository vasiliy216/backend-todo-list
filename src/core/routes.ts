import express from 'express';
import socket from 'socket.io';
import bodyParser from 'body-parser'
import cors from 'cors'

import { TodoItemController } from '../controllers';

const createRoutes = (app: express.Express, io: socket.Server) => {
    
    const TodoItemCtrl = new TodoItemController(io);

    app.use(cors());
    app.use(bodyParser.json());

    app.get("/all", TodoItemCtrl.findAll)
    app.post("/create", TodoItemCtrl.create)
    app.delete("/delete/:id", TodoItemCtrl.delete)
    app.put("/update/:id", TodoItemCtrl.update)

}

export default createRoutes;