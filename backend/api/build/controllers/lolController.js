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
exports.LolController = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const ChampionService_1 = require("../services/ChampionService");
const asyncHandler_1 = require("../utils/asyncHandler");
dotenv_1.default.config();
class LolController {
    constructor() {
        this.getChampionInfo = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { language, championName } = req.params;
            const data = yield this.championService.getChampionInfo(language, championName);
            res.json(data);
        }));
        this.championService = new ChampionService_1.ChampionService();
    }
    getSummonerInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                console.error('Error:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
        });
    }
}
exports.LolController = LolController;
