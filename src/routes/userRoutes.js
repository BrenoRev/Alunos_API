import { Router } from 'express';
const router = new Router();
import userController from '../controllers/userController';

router.post('/', userController.store);

export default router;
