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

    public async getChampionInfo(req: Request, res: Response): Promise<void> {
        const { language, championName } = req.params;
        const baseUrl = `https://ddragon.leagueoflegends.com/cdn/14.3.1/data/${language}`;

        try {
            if (championName) {
                const response = await axios.get(`${baseUrl}/champion/${championName}.json`);
                res.json(response.data);
            } else {
                const response = await axios.get(`${baseUrl}/champion.json`);
                res.json(response.data);
            }
        } catch (error) {
            console.error('Error al obtener campeones:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    public async getAllChampionsByLanguage(req: Request, res: Response): Promise<void> {
        const language = req.params.language;
        const dataDragonUrl = `https://ddragon.leagueoflegends.com/cdn/14.3.1/data/${language}/champion.json`;

        try {
            const response = await axios.get(dataDragonUrl);
            const champions = response.data.data;
            res.json(champions);
        } catch (error) {
            console.error('Error al obtener campeones:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

}

export default new LolController();