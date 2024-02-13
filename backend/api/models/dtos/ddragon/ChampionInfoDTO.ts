interface ChampionInfoDTO {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: ChampionInfoDetailsDTO;
    image: ChampionImageDTO;
    tags: string[];
    partype: string;
    stats: ChampionStatsDTO;
}