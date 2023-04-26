import  Router  from 'express';
import UserController from '../controllers/UserController.js';

const router = new Router();

router.post('/login', UserController.login);
router.get('/auth', UserController.check);

export default router;