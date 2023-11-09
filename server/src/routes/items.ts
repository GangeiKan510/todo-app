import express, {Request, Response, Router} from "express";
import getItems, { createItem, updateItem, deleteItem } from "../db/handlers/ItemsHandler";

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {

    const result: [] = await getItems();
    res.json(result);

  } catch (error) {
    res.send(error); 
  }
});

router.post('/create', async (req: Request, res: Response) => {
  try {

    const {title, description, userId} = req.body;
    await createItem(title, description, userId);
    res.sendStatus(200);

  } catch (error) {
    res.send(error);
  }
});

router.put('/update', async (req: Request, res: Response) => {
  try {

    const {itemId, title, description} = req.body;
    console.log(itemId, title, description);
    await updateItem(itemId, title, description);
    res.sendStatus(200);

  } catch (error) {
    res.send(error);
  }
});

router.delete('/delete/:id', async (req: Request, res: Response) => {
  try {
 
    const id = Number(req.params.id);
    await deleteItem(id);
    res.sendStatus(200); 

  } catch (error) {
    res.send(error);
  }
});

export default router;