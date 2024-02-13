import {Request, Response} from 'express';

import dotenv from 'dotenv';
import {ChampionService} from "../services/ChampionService";
import {ChampionParams} from "../models/dtoParams/ChampionParams";
import {responseHandler} from "../utils/functions";

dotenv.config();

export class LolController {
    private championService: ChampionService;

    constructor() {
        this.championService = new ChampionService();
    }

    public async getSummonerInfo(req: Request, res: Response): Promise<void> {
        try {
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    }


    public getChampionInfo = responseHandler(
        async (
            req: Request<ChampionParams>,
            res: Response<ChampionDataRootDTO| null>
        ) => {
            const data = await this.championService.getChampionInfo(req.params);
            res.json(data);
        }
    );

    public getChampionImg = responseHandler(
        async (
            req: Request<ChampionParams>,
            res: Response<any>
        ) => {
            const data = await this.championService.getChampionImg(req.params);
            res.json(data);
        }
    );
}