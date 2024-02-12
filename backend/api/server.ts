import express, { Express ,Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app: Express = express();
const PORT: string | number = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server ins running in http://localhost:${PORT}`);
});

app.get('/hola-mundo', (req: Request, res: Response) => {
    res.send('¡Hola Mundo!');
});
