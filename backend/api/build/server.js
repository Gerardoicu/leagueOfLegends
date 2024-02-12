"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const MainRouter_1 = __importDefault(require("./routes/MainRouter"));
const LolRoutes_1 = __importDefault(require("./routes/LolRoutes"));
dotenv_1.default.config();
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.PORT = process.env.PORT || 3000;
        this.app.use((0, cors_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use(express_1.default.json());
        this.app.use('/api', MainRouter_1.default);
        this.app.use('/lol', LolRoutes_1.default);
    }
    start() {
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
