import express, {Request, Response} from "express";
import db from "../db/connection";

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default router;