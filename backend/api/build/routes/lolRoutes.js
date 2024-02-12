"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/LolRoutes.ts
const express_1 = require("express");
const LolController_1 = require("../controllers/LolController");
const router = (0, express_1.Router)();
const lolController = new LolController_1.LolController();
router.get('/summoner/:summonerName', lolController.getSummonerInfo.bind(lolController));
router.get('/champions/:language/:championName?', lolController.getChampionInfo.bind(lolController));
exports.default = router;
