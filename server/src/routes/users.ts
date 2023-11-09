import express from 'express';
import getAllUsers from '../db/handlers/UserHandler';

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await getAllUsers();
  res.json(result);
});

export default router;