import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'

import { TodoItemController } from '../controllers';

const createRoutes = (app: express.Express) => {
    
    const TodoItemCtrl = new TodoItemController();

    app.use(cors());
    app.use(bodyParser.json());

    app.get("/all", TodoItemCtrl.findAll)
    app.post("/create", TodoItemCtrl.create)
    app.delete("/delete/:id", TodoItemCtrl.delete)
    app.put("/update/:id", TodoItemCtrl.update)

}

export default createRoutes;