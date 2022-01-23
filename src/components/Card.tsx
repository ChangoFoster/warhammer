import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonImg,
} from '@ionic/react';

interface Props {
    subtitle: string,
    title: string,
    url: string | undefined,
}

const Card: React.FC<Props> = ({ subtitle, title, url }) => {
    return (
        <IonCard>
          <IonCardHeader>
            {url && <IonImg src={url}/>}
            <IonCardSubtitle>{subtitle}</IonCardSubtitle>
            <IonCardTitle>{title}</IonCardTitle>
          </IonCardHeader>
        </IonCard>
    );
};

export default Card;
