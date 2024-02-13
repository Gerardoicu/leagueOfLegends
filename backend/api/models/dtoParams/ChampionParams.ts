import {LanguageCodeEnum} from "../dtos/LanguageCodeEnum";

export enum ImageType {
    splash,
    loading,
    passive,
    square
}

export interface ChampionParams {
    championName?: string;
    language?: LanguageCodeEnum;
    imageType?: ImageType;

    imgIndex?: string;
}