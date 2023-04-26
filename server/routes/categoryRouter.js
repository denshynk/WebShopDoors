import Router  from 'express';
const router = new Router()
import categoryController from '../controllers/categoryController.js';

router.post('/', categoryController.create)
router.get('/', categoryController.getAll)

export default router;
