import axios from 'axios';
import { CARD_URL as URL } from '../constants';

const getCards = async (query: string) => {
    const body = {
        size: 5,
        query: {
            bool: {
                must: [
                    { match: { name: { query } } },
                ]
            },
        },
        sort: [
            { "name.keyword": "asc" }
        ]
    };

    const response = await axios.post(`${URL}/_search`, body);
    return response.data;
};

export { getCards };
