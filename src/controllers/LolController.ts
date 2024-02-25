import {Request, Response} from 'express';
import {ChampionService} from "../services/ChampionService";
import {ChampionParams} from "../models/dtoParams/ChampionParams";

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
        public getAllChampionInfo =
        async (
            req: Request<ChampionParams>,
            res: Response<ChampionsDataDTO[] | null>
        ) => {
            const data = await this.championService.getAllChampionInfo(req.params);
            res.json(data);
        }

    public getChampionInfo =
        async (
            req: Request<ChampionParams>,
            res: Response<ChampionsDataDTO | null>
        ) => {
            const data = await this.championService.getChampionInfo(req.params);
            res.json(data);
        }

    public getChampionsNames =
        async (
            req: Request<ChampionParams>,
            res: Response<string[] | null>
        ) => {
            const data = await this.championService.getChampionNames(req.params);
            res.json(data);
        }
    public getChampionImg =
        async (
            req: Request<ChampionParams>,
            res: Response<any>
        ) => {
            const data = await this.championService.getChampionImg(req.params);
            res.json(data);
        }
}