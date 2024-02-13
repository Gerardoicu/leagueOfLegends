import axios from 'axios';
import {LanguageCodeEnum} from "../models/dtos/LanguageCodeEnum";
import {ChampionParams} from "../models/dtoParams/ChampionParams";

export class ChampionService {
    private baseUrl = 'https://ddragon.leagueoflegends.com/cdn/14.3.1/data';
    private apiKey: string = process.env.API_KEY || '';

    public async getChampionInfo(championParams: ChampionParams): Promise<ChampionDataRootDTO | ChampionsDataDTO | null> {
        const formattedChampionName = this.getFormattedChampionName(championParams.championName);
        const endpoint = championParams.championName ? `/champion/${formattedChampionName}.json` : '/champion.json';
        try {
            const response = await axios.get<ChampionDataRootDTO | ChampionsDataDTO>(`${this.baseUrl}/${championParams.language}${endpoint}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching champion data:', error);
            return null;
        }
    }

    private getFormattedChampionName(championName: string | undefined) {
        return championName
            ? encodeURIComponent(championName.charAt(0).toUpperCase() + championName.slice(1).toLowerCase())
            : undefined;
    }
}