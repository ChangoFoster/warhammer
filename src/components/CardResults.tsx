import { IonText } from '@ionic/react';

import Card from './Card';

import { CARD_IMG_URL } from '../constants';

interface Props {
    hits: any,
    total: any,
};

const NoResults = () => (<IonText color="primary">No results</IonText>);

const CardResults: React.FC<Props> = ({ hits, total }) => {
    if (!total ||total < 1) {
        return <NoResults />
    }

    const cards = hits.map((card: any) => {
        const image = card._source.skus.filter((sku: any) => sku.default && sku.lang === "en")[0];
        const imageUrl = `${CARD_IMG_URL}/${image.id}.jpg`;

        return (
        <Card
            key={card._id}
            subtitle={card._source?.class?.en || card._source?.category?.en || 'N/A'}
            title={card._source.name}
            url={imageUrl}
        />
        );
    });

    return cards ? cards : <NoResults />;
};

export default CardResults;
