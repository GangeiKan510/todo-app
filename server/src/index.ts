import bodyParser from 'body-parser';
import express, { Application } from 'express';
import items from './routes/items';
import users from './routes/users';
import db from './db/db';
require('dotenv').config();

const app: Application = express();
const PORT = process.env.SERVER_PORT; 

db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/items", items);
app.use("/users", users);

app.listen(PORT || 5000, () => {
  console.log("Up and running on port", PORT);
}); 