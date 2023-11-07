import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';
import todo from './routes/todo';
import db from './db/connection';

const app: Application = express();
const PORT = 8080; 

db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/todo", todo);

app.listen(PORT, () => {
  console.log("Up and running on port", PORT);
});