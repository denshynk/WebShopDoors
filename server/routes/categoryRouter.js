import Router  from 'express';
const router = new Router()
import categoryController from '../controllers/categoryController.js';
import ChechRoleMiddleWare from '../middleware/ChechRoleMiddleWare.js';

router.post('/', ChechRoleMiddleWare('ADMIN'), categoryController.create)
router.get('/', categoryController.getAll)

export default router;
