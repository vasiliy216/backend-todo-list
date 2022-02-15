import mongoose, { ConnectOptions } from 'mongoose'; 

const DataBase: string = process.env.DATABASE_ACCESS ? String(process.env.DATABASE_ACCESS) : "";

mongoose.connect(DataBase,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions,
    (err: any) => {
        if (err) {
            throw Error(err);
        }
    });