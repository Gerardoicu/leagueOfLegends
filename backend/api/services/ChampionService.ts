import axios from 'axios';
import {ChampionParams} from "../models/dtoParams/ChampionParams";

export class ChampionService {
    private baseUrl = 'https://ddragon.leagueoflegends.com/cdn';
    private apiKey: string = process.env.API_KEY || '';

    public async getChampionInfo(championParams: ChampionParams): Promise<ChampionDataRootDTO | null> {
        const formattedChampionName = this.getFormattedChampionName(championParams.championName);
        const endpoint = championParams.championName ? `champion/${formattedChampionName}.json` : 'champion.json';
        try {
            const response = await axios.get<ChampionDataRootDTO>(`${this.baseUrl}/14.3.1/data/${championParams.language}/${endpoint}`);

            const champs: ChampionsDataDTO = (response.data as ChampionDataRootDTO).data;
            let param: ChampionParams = {
                imageType: 'splash',
                championName: '',
                imgIndex: ''
            };
            Object.keys(champs).forEach(key => {
                if (champs[key].skins) {
                    champs[key].skins.forEach((skin: ChampionSkin) => {
                        param.imageType = 'splash';
                        param.championName = key;
                        param.imgIndex = skin.num.toString();
                        skin.splashArt = this.getChampionImg(param);
                        param.imageType = 'loading';
                        skin.loading = this.getChampionImg(param);
                    });
                    param.imageType = 'square';
                    champs[key].image.url = this.getChampionImg(param);
                    param.imageType = 'passive';
                    param.imgIndex = champs[key].passive.image.full
                    champs[key].passive.image.url = this.getChampionImg(param);
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching champion data:', error);
            return null;
        }
    }

    public getChampionImg(championParams: ChampionParams): string {
        const formattedChampionName = this.getFormattedChampionName(championParams.championName);
        let endpoint;
        switch (championParams.imageType) {
            case 'loading':
                endpoint = `/img/champion/loading/${formattedChampionName}_${championParams.imgIndex}.jpg`;
                break;
            case 'splash':
                endpoint = `/img/champion/splash/${formattedChampionName}_${championParams.imgIndex}.jpg`;
                break;
            case 'passive':
                endpoint = `/14.3.1/img/passive/${championParams.imgIndex}`;
                break;
            case 'square':
                endpoint = `/14.3.1/img/champion/${formattedChampionName}.png`;
                break;
            default:
                endpoint = '';
                break;
        }

        return `${this.baseUrl}${endpoint}`;

    }

    private getFormattedChampionName(championName: string | undefined) {
        return championName
            ? encodeURIComponent(championName.charAt(0).toUpperCase() + championName.slice(1).toLowerCase())
            : undefined;
    }
}