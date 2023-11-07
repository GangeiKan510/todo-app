import express, {Request, Response} from "express";
import db from "../db/connection";

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send("This is the todo route");
});

export default router;