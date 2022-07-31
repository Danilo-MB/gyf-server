import { Router } from 'express';
import {
  getComments,
  saveComment,
} from '../controllers/comments';

const router = Router();

router.get("/comments", getComments);
router.post("/comments", saveComment);

export default router;

