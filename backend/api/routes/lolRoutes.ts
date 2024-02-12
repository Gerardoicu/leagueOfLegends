const express = require('express');
const router = express.Router();
import LolController from '../controllers/lolController';


router.get('/summoner/:summonerName', LolController.getSummonerInfo);

router.get('/champion/:championName', LolController.getChampionInfo);

router.get('/champions/:language', LolController.getAllChampionsByLanguage);
export default router;