import axios from 'axios';

import {LanguageCodeEnum} from "../../shared/LanguageCodeEnum";
import {ChampionParams, ImageType} from "../../shared/models/dtoParams/ChampionParams";
import {ChampionSkin} from "../../shared/models/dtos/ChampionInfoDTO";
import {ChampionsDataDTO} from "../../shared/models/dtos/ChampionsDataDTO";
import {ChampionDataRootDTO} from "../../shared/models/dtos/ChampionDataRootDTO";

export class ChampionService {
    private baseUrl = 'https://ddragon.leagueoflegends.com/cdn';
    private apiKey: string = process.env.API_KEY || '';

    public async getChampionInfo(championParams: ChampionParams): Promise<ChampionsDataDTO | null> {
        const response = await this.getDataChamps(championParams);
        if (!response) {
            return null;
        }
        const champs: ChampionsDataDTO = response.data as ChampionsDataDTO;
        Object.keys(champs).forEach(key => {
            this.findImages(champs, key);
        });
        return champs;

    }


    public async getAllChampionInfo(championParams: ChampionParams): Promise<ChampionsDataDTO[] | null> {
        let champions: string[] | null = await this.getChampionNames();
        if (!champions) {
            return null;
        }

        const champsInfoPromises = champions.map(champ => {
            const params = { ...championParams, championName: champ };
            return this.getChampionInfo(params);
        });
        const champsInfo = await Promise.all(champsInfoPromises);
        return champsInfo.filter(champData => champData !== null) as ChampionsDataDTO[];
    }
    public async getChampionNames(championParams?: ChampionParams): Promise<string[] | null> {
        if (!championParams) {
            championParams = {
                language: LanguageCodeEnum.EN_US,
                championName: undefined,
            };
        }
        const response = await this.getDataChamps(championParams);
        if (!response) {
            return null;
        }
        const champs: ChampionDataRootDTO = response as ChampionDataRootDTO;
        const keysArray: string[] = Object.keys(champs.data);
        return keysArray;
    }

    public getChampionImg(championParams: ChampionParams): string {
        const formattedChampionName = this.getFormattedChampionName(championParams.championName);
        let endpoint;
        switch (championParams.imageType) {
            case ImageType.loading:
                endpoint = `/img/champion/loading/${formattedChampionName}_${championParams.imgIndex}.jpg`;
                break;
            case ImageType.splash:
                endpoint = `/img/champion/splash/${formattedChampionName}_${championParams.imgIndex}.jpg`;
                break;
            case ImageType.passive:
                endpoint = `/14.3.1/img/passive/${championParams.imgIndex}`;
                break;
            case ImageType.square:
                endpoint = `/14.3.1/img/champion/${formattedChampionName}.png`;
                break;
            default:
                endpoint = '';
                break;
        }

        return `${this.baseUrl}${endpoint}`;

    }

    private async getDataChamps(championParams: ChampionParams): Promise<ChampionDataRootDTO | null> {
        console.log("params: ", championParams);
        try {
            const formattedChampionName = this.getFormattedChampionName(championParams.championName);
            const endpoint = championParams.championName ? `champion/${formattedChampionName}.json` : 'champion.json';
            console.log(`${this.baseUrl}/14.3.1/data/${championParams.language}/${endpoint}`);
            const response = await axios.get<ChampionDataRootDTO>(`${this.baseUrl}/14.3.1/data/${championParams.language}/${endpoint}`);
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

    private findImages(champs: ChampionsDataDTO, key: string) {
        let param: ChampionParams = {
            imageType: ImageType.splash,
            championName: '',
            imgIndex: ''
        };
        if (champs[key].skins) {
            champs[key].skins.forEach((skin: ChampionSkin) => {
                param.imageType = ImageType.splash;
                param.championName = key;
                param.imgIndex = skin.num.toString();
                skin.splashArt = this.getChampionImg(param);
                param.imageType = ImageType.loading;
                skin.loading = this.getChampionImg(param);
            });
            param.imageType = ImageType.square;
            champs[key].image.url = this.getChampionImg(param);
            param.imageType = ImageType.passive;
            param.imgIndex = champs[key].passive.image.full
            champs[key].passive.image.url = this.getChampionImg(param);
        }
    }
}