import {LanguageCodeEnum} from "../dtos/LanguageCodeEnum";

export interface ChampionParams {
    championName?: string;
    language?: LanguageCodeEnum;
    imageType?: 'splash'|'loading'|'passive'| 'square';

    imgIndex?: string;
}