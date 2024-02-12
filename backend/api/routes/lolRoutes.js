"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const { getSummonerInfo } = require('../controllers/lolController');
router.get('/summoner/:summonerName', getSummonerInfo);
exports.default = router;
