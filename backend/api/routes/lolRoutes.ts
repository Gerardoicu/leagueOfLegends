const express = require('express');
const router = express.Router();
const { getSummonerInfo } = require('../controllers/lolController');


router.get('/summoner/:summonerName', getSummonerInfo);
export default router;