import { Router } from 'express';
import * as userController from '../controllers/userController';

const router: Router = Router();

router.get('/', userController.getUsers);

export default router;