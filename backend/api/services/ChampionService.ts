import axios from 'axios';

export class ChampionService {
    private baseUrl = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/data';
    private apiKey: string = process.env.API_KEY || '';
    public async getChampionInfo(language: string, championName?: string): Promise<any> {
        const endpoint = championName ? `/champion/${championName}.json` : '/champion.json';
        try {
            const response = await axios.get(`${this.baseUrl}/${language}${endpoint}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching champion data:', error);
            throw new Error('Failed to fetch champion data');
        }
    }
}