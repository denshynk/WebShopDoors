import  Router  from 'express';
import productsController from '../controllers/productsController.js';
import ChechRoleMiddleWare from '../middleware/ChechRoleMiddleWare.js';

const router = new Router();

router.post('/',ChechRoleMiddleWare('ADMIN'), productsController.create)
router.get('/', productsController.getAll);

router.get('/:id', productsController.getOne);

export default router;
