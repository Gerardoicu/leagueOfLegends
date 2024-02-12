"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const lolRoutes_1 = __importDefault(require("./routes/lolRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use('/api', routes_1.default);
app.use('/lol', lolRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server ins running in http://localhost:${PORT}`);
});
app.get('/hola-mundo', (req, res) => {
    res.send('¡Hola Mundo!');
});
