import { Schema, model, Document } from 'mongoose'

export interface ITodoItem extends Document {
    text: string,
    read: boolean,
}

const TodoItem: Schema = new Schema(
    {
        text: {
            type: String,
            required: true
        },
        read: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
    }
)

const TodoItemModel = model<ITodoItem>("TodoItem", TodoItem);

export default TodoItemModel;