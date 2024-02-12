import { Router } from 'express';
import UserRoutes from './UserRoutes';
import LolRoutes from './LolRoutes';

class MainRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.use('/users', UserRoutes);
        this.router.use('/lol', LolRoutes);
    }
}

export default new MainRouter().router;