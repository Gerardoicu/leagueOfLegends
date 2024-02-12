"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const baseUrl = 'https://na1.api.riotgames.com/lol';
class LolController {
    constructor() {
        this.apiKey = process.env.API_KEY || '';
    }
    getSummonerInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const summonerName = req.params.summonerName;
                const response = yield axios_1.default.get(`${baseUrl}/summoner/v4/summoners/by-name/${encodeURIComponent(summonerName)}`, {
                    headers: {
                        'X-Riot-Token': this.apiKey
                    }
                });
                res.json(response.data);
            }
            catch (error) {
                console.error('Error:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
        });
    }
    getChampionInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { language, championName } = req.params;
            const baseUrl = `https://ddragon.leagueoflegends.com/cdn/14.3.1/data/${language}`;
            try {
                if (championName) {
                    const response = yield axios_1.default.get(`${baseUrl}/champion/${championName}.json`);
                    res.json(response.data);
                }
                else {
                    const response = yield axios_1.default.get(`${baseUrl}/champion.json`);
                    res.json(response.data);
                }
            }
            catch (error) {
                console.error('Error al obtener campeones:', error);
                res.status(500).json({ message: 'Error interno del servidor' });
            }
        });
    }
    getAllChampionsByLanguage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const language = req.params.language;
            const dataDragonUrl = `https://ddragon.leagueoflegends.com/cdn/14.3.1/data/${language}/champion.json`;
            try {
                const response = yield axios_1.default.get(dataDragonUrl);
                const champions = response.data.data;
                res.json(champions);
            }
            catch (error) {
                console.error('Error al obtener campeones:', error);
                res.status(500).json({ message: 'Error interno del servidor' });
            }
        });
    }
}
exports.default = new LolController();
