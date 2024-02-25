import { Router } from 'express';
import { UserController } from '../controllers/UserController';

class UserRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.setRoutes();
    }

    private setRoutes() {
  //      this.router.get('/', AuthMiddleware.checkToken, UserController.getAllUsers);
        // Añade aquí más rutas según sea necesario
    }
}

export default new UserRoutes().router;