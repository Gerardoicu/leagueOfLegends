export interface ChampionInfoDTO {
    id: string;
    key: string;
    name: string;
    title: string;
    image: ChampionImage;
    skins: ChampionSkin[];
    lore: string;
    blurb: string;
    allytips: string[];
    enemytips: string[];
    tags: string[];
    partype: string;
    info: {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
    };
    stats: {
        hp: number;
        hpperlevel: number;
        mp: number;
        mpperlevel: number;
        movespeed: number;
        armor: number;
        armorperlevel: number;
        spellblock: number;
        spellblockperlevel: number;
        attackrange: number;
        hpregen: number;
        hpregenperlevel: number;
        mpregen: number;
        mpregenperlevel: number;
        crit: number;
        critperlevel: number;
        attackdamage: number;
        attackdamageperlevel: number;
        attackspeedperlevel: number;
        attackspeed: number;
    };
    spells: ChampionSpell[];
    passive: {
        name: string;
        description: string;
        image: ChampionImage;
    };
    recommended: any[];
}

export interface ChampionImage {
    url?: string;
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface ChampionSkin {
     id: string;
    num: number;
    name: string;
    chromas: boolean;

    splashArt?: string;
    loading?: string;
}

export interface ChampionSpell {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    leveltip: {
        label: string[];
        effect: string[];
    };
    maxrank: number;
    cooldown: number[];
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    datavalues: {};
    effect: (number[] | null)[];
    effectBurn: (string | null)[];
    vars: any[];
    costType: string;
    maxammo: string;
    range: number[];
    rangeBurn: string;
    image: ChampionImage;
    resource: string;
}
