import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'

import { connectMongoose } from "./database";
import { apiRouter } from "./modules/api";
import { ErrorHandler } from "./utils";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded());


app.use('/', apiRouter);
app.use(ErrorHandler.catch);

app.listen(port, async () => {
    await connectMongoose()

    return console.log(`Express is listening at http://localhost:${port}`);
});


