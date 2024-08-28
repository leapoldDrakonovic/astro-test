interface IFetchAllData {
    language: "original",
    period: string,
    horoscope: {
        aries: string,
        gemini: string,
        cancer: string,
        leo: string,
        virgo: string,
        libra: string,
        scorpio: string,
        sagittarius: string,
        capricorn: string,
        aquarius: string,
        pisces: string
    }
}

interface IFetchItemData {
    sign: string,
    language: string,
    period: string,
    horoscope: string
}

export type {IFetchAllData, IFetchItemData}