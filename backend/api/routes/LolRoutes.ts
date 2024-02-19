import { Router } from 'express';
import { LolController } from "../controllers/LolController";
import {AuthMiddleware} from "../AuthMiddleWare";
import {ResponseHandlerMiddleware} from "../ResponseHandlerMiddleware";

const router = Router();
const lolController = new LolController();
router.get('/summoner/:summonerName', AuthMiddleware.verifyToken, ResponseHandlerMiddleware.responseHandler(lolController.getSummonerInfo.bind(lolController)));
router.get('/champions/:language/:championName?', AuthMiddleware.verifyToken, ResponseHandlerMiddleware.responseHandler(lolController.getChampionInfo.bind(lolController)));
router.get('/champions/img/:imageType/:championName/:imgIndex?', AuthMiddleware.verifyToken, ResponseHandlerMiddleware.responseHandler(lolController.getChampionImg.bind(lolController)));

export default router;