import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes/MainRouter';
import lolRoutes from './routes/LolRoutes';
import {UserController} from "./controllers/UserController";
import dotenv from 'dotenv';
dotenv.config();
class Server {
    private app: Express;
    private PORT: string | number;

    constructor() {
        this.app = express();
        this.PORT = process.env.PORT || 3000;

        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use('/api', routes);
        this.app.use('/lol', lolRoutes);
        this.app.post('/auth/login', UserController.login);

    }

    public start(): void {
    //    this.generateSecret();
        this.app.listen(this.PORT, () => {
            console.log(`Server is running in http://localhost:${this.PORT}`);
        });

        this.app.get('/hola-mundo', (req, res) => {
            res.send('¡Hola Mundo!');
        });
    }

    private generateSecret() {
        const crypto = require('crypto');
        const secret = crypto.randomBytes(32).toString('base64');
        console.log('|' + secret + '|');
    }
}

const server = new Server();
server.start();