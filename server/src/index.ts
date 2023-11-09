import bodyParser from 'body-parser';
import express, { Application } from 'express';
import items from './routes/items';
import db from './db/db';
import cors from 'cors';

require('dotenv').config();

const app: Application = express();
const PORT = process.env.SERVER_PORT; 

db.connect();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/items", items);

app.listen(PORT || 5000, () => {
  console.log("Up and running on port", PORT);
}); 