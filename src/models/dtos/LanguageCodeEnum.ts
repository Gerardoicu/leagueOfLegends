export  enum LanguageCodeEnum {
    CS_CZ = "cs_CZ",
    EL_GR = "el_GR",
    PL_PL = "pl_PL",
    RO_RO = "ro_RO",
    HU_HU = "hu_HU",
    EN_GB = "en_GB",
    DE_DE = "de_DE",
    ES_ES = "es_ES",
    IT_IT = "it_IT",
    FR_FR = "fr_FR",
    JA_JP = "ja_JP",
    KO_KR = "ko_KR",
    ES_MX = "es_MX",
    ES_AR = "es_AR",
    PT_BR = "pt_BR",
    EN_US = "en_US",
    EN_AU = "en_AU",
    RU_RU = "ru_RU",
    TR_TR = "tr_TR",
    MS_MY = "ms_MY",
    EN_PH = "en_PH",
    EN_SG = "en_SG",
    TH_TH = "th_TH",
    VI_VN = "vi_VN",
    ID_ID = "id_ID",
    ZH_MY = "zh_MY",
    ZH_CN = "zh_CN",
    ZH_TW = "zh_TW",
}

function toLanguageCode(code: string): LanguageCodeEnum | undefined {
    if (Object.values(LanguageCodeEnum).includes(code as LanguageCodeEnum)) {
        return code as LanguageCodeEnum;
    } else {
        return undefined;
    }
}