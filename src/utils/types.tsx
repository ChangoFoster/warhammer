export interface Sku {
    default: boolean,
    id: string,
    lang: string,
};

export interface Card {
    skus: Sku[],
    subtitle: string,
    title: string,
};

export interface CardData {
    hits: Card[],
    total: number,
};
