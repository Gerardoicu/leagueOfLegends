import { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseUrl = 'https://na1.api.riotgames.com/lol';

class LolController {
    private apiKey: string;

    constructor() {
        this.apiKey = process.env.API_KEY || '';
    }

    public async getSummonerInfo(req: Request, res: Response): Promise<void> {
        try {
            const summonerName = req.params.summonerName;
            const response = await axios.get(`${baseUrl}/summoner/v4/summoners/by-name/${encodeURIComponent(summonerName)}`, {
                headers: {
                    'X-Riot-Token': this.apiKey
                }
            });
            res.json(response.data);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export default new LolController();