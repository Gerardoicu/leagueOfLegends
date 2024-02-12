// src/routes/LolRoutes.ts
import { Router } from 'express';
import {LolController} from "../controllers/LolController";


const router = Router();
const lolController = new LolController();

router.get('/summoner/:summonerName', lolController.getSummonerInfo.bind(lolController));
router.get('/champions/:language/:championName?', lolController.getChampionInfo.bind(lolController));

export default router;