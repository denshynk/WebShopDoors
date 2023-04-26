import  Router  from 'express';
import productsRouter from './productsRouter.js';
import categoryRouter from './categoryRouter.js';
import userRouter from './userRouter.js';

const router = new Router();

router.use('/products', productsRouter);
router.use('/user', userRouter);
router.use('/category', categoryRouter);

export default router;