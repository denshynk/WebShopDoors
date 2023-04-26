import  Router  from 'express';
import productsController from '../controllers/productsController.js';

const router = new Router();

router.route('/')
  .post(productsController.create)
  .get(productsController.getAll);

router.get('/:id', productsController.getOne);

export default router;
