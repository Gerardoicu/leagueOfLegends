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
        const championName = req.params.championName;
        const language = 'en_US';
        const version = '14.3.1';
        const dataDragonUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion/${championName}.json`;

        try {
        } catch (error) {
            const axiosError = error as { response?: { status: number } };
            if (axiosError.response && axiosError.response.status === 404) {
                res.status(404).json({ message: 'Champion not found' });
            } else {
                console.error('Error:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
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