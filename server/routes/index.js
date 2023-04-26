import  Router  from 'express';
import productsRouter from './productsRout.js';
import categoryRouter from './categoryRout.js';
import userRouter from './userRout.js';

const router = new Router();

router.use('/products', productsRouter);
router.use('/user', userRouter);
router.use('/category', categoryRouter);

export default router;