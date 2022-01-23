import { Card, CardData, Sku } from './types';

const isArray = (arr: unknown): arr is any[] => {
    return Array.isArray(arr);
};

const isBoolean = (bool: unknown): bool is boolean => {
    return bool === true || bool === false;
};

const isNumber = (num: unknown): num is number => {
    return !Number.isNaN(num);
}

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseId = (id: unknown): string => {
    if (!id || !isString(id)) {
        throw new Error('Incorrect or missing id');
    }

    return id;
};

const parseLang = (lang: unknown): string => {
    if (!lang || !isString(lang)) {
        throw new Error('Incorrect or missing lang');
    }

    return lang;
};

const parseDefaultSku = (defaultSku: unknown): boolean => {
    if (defaultSku !== undefined && !isBoolean(defaultSku)) {
        throw new Error('Incorrect or missing defaultSku');
    }

    return Boolean(defaultSku);
};

type ToSkuFields = { default: unknown, id: unknown, lang: unknown };

const toSku = (object: ToSkuFields): Sku => {
    return {
        default: parseDefaultSku(object.default),
        id: parseId(object.id),
        lang: parseLang(object.lang),
    };
};

const toSkus = (array: unknown): Sku[] => {
    if (!array || !isArray(array)) {
        throw new Error('Incorrect or missing sku')
    }

    return array.map(sku => toSku(sku));
};

const parseSubtitle = (subtitle: unknown): string => {
    if (!subtitle || !isString(subtitle) ) {
        return 'N/A';
    }

    return subtitle;
};

const parseTitle = (title: unknown): string => {
    if (!title || !isString(title)) {
        throw new Error('Incorrect or missing title');
    }

    return title;
};

type ToCardFields = { category: unknown, name: unknown, skus: unknown };

const toCard = ({ category, name, skus }: ToCardFields): Card => {
    return {
        skus: toSkus(skus),
        subtitle: parseSubtitle(category),
        title: parseTitle(name),
    };
};

const toCards = (array: unknown): Card[] => {
    if (!array || !isArray(array)) {
        throw new Error('Incorrect or missing card');
    }

    return array.map(card => toCard(card));
};

const parseTotal = (total: unknown): number => {
    if (!total || !isNumber(total)) {
        throw new Error('Incorrect or missing total');
    }

    return total;
};

type ToCardResponseField = { hits: unknown, total: unknown };

const toCardResponse = ({ hits, total }: ToCardResponseField): CardData => {
    return {
        hits: toCards(hits),
        total: parseTotal(total),
    };
};

export { toCardResponse };
