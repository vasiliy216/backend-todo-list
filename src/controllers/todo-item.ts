import express from 'express'
import { TodoItemModel } from '../models/index'
import { ITodoItem } from '../models/todo-item'

export default class TodoItemController {

    create = (req: express.Request, res: express.Response): void => {

        const postData: { text: string } = {
            text: req.body.text
        };

        const TodoItem = new TodoItemModel(postData);

        TodoItem
            .save()
            .then((data: ITodoItem) => {
                res.json(data)
            })
            .catch((err: any) => {
                return res.status(404).json({
                    status: "error",
                    message: err
                })
            })

    };

    delete = (req: express.Request, res: express.Response): void => {
        const id: string = req.params.id;

        TodoItemModel
            .findOneAndRemove({ _id: id })
            .then((item) => {
                if (item) {
                    res.json({
                        message: 'The task element has been deleted.'
                    })
                }
            })
            .catch(() => {
                return res.json({
                    message: 'The task does not exist.'
                });
            })

    };

    update = (req: express.Request, res: express.Response): void => {
        const id: string = req.params.id;

        TodoItemModel
            .findOne({ _id: id }, (err: any, item: ITodoItem) => {
                if (err || !item) {
                    return res.status(403).json({
                        message: 'The task does not exist.'
                    })
                }

                item.read = !item.read;
                item.save();

                res.status(200).json({
                    item
                })

            })
    };

    findAll = (req: express.Request, res: express.Response): void => {
        TodoItemModel
            .find()
            .then((items: ITodoItem[]) => res.json(items))
            .catch((err: any) => {
                return res.status(404).json({
                    status: "error",
                    message: err
                })
            })
    };

};