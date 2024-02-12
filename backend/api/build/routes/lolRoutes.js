"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const lolController_1 = __importDefault(require("../controllers/lolController"));
router.get('/summoner/:summonerName', lolController_1.default.getSummonerInfo);
router.get('/champions/:language/:championName?', lolController_1.default.getChampionInfo);
exports.default = router;
