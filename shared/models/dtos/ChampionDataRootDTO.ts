import {ChampionsDataDTO} from "./ChampionsDataDTO";

export interface ChampionDataRootDTO {
    type: string;
    format: string;
    version: string;
    data: ChampionsDataDTO;
}