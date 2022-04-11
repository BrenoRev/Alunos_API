import { Router } from 'express';
const router = new Router();
import userController from '../controllers/userController';

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.destroy);


export default router;
