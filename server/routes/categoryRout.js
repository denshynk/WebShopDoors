import  Router  from 'express';
import categoryController from '../controllers/categoryController.js';

const router = new Router()

router.post('/', categoryController.create)
router.post('/', categoryController.getAll)

export default router;
