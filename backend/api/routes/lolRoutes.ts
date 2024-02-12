const express = require('express');
const router = express.Router();
import LolController from '../controllers/lolController';


router.get('/summoner/:summonerName', LolController.getSummonerInfo);

router.get('/champions/:language/:championName?', LolController.getChampionInfo);

export default router;