import { Router } from 'express';
import UserRoutes from './UserRoutes';
import LolRoutes from './LolRoutes';
import { UserController } from "../controllers/UserController";
import { AuthMiddleware } from "../AuthMiddleWare";

class MainRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.setupOpenRoutes();
        this.applyGlobalMiddleware();
        this.initializeProtectedRoutes();
    }

    private setupOpenRoutes(): void {
        this.router.post('/auth/login', UserController.login);
    }

    private applyGlobalMiddleware(): void {
        this.router.use(AuthMiddleware.verifyToken);
    }

    private initializeProtectedRoutes(): void {
        this.router.use('/users', UserRoutes);
        this.router.use('/lol', LolRoutes);
        this.router.get('/profile', UserController.getProfile);
    }
}

export default new MainRouter().router;