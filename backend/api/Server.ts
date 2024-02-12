import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/MainRouter';
import lolRoutes from './routes/LolRoutes';

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
    }

    public start(): void {
        this.app.listen(this.PORT, () => {
            console.log(`Server is running in http://localhost:${this.PORT}`);
        });

        this.app.get('/hola-mundo', (req, res) => {
            res.send('¡Hola Mundo!');
        });
    }
}

const server = new Server();
server.start();