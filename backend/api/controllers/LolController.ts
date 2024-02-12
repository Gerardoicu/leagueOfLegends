// src/controllers/LolController.ts
import { Request, Response } from 'express';

import dotenv from 'dotenv';
import {ChampionService} from "../services/ChampionService";
import {asyncHandler} from "../utils/asyncHandler";

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
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }


    public getChampionInfo = asyncHandler(async (req: Request, res: Response) => {
        const { language, championName } = req.params;
        const data = await this.championService.getChampionInfo(language, championName);
        res.json(data);
    });
}