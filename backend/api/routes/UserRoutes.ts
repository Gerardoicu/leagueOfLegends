import { Router } from 'express';
import * as userController from '../controllers/UserController';

const router: Router = Router();

router.get('/', userController.getUsers);

export default router;