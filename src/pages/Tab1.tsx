import React from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import CardResults from '../components/CardResults';

import useCards from '../hooks/useCards';

import './Tab1.css';

const Tab1: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');
  const { data, isLoading, refetch } = useCards(search);

  const handleClick = () => {
    refetch();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Warhammer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Warhammer</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonInput
          onIonChange={e => setSearch(e.detail.value!)}
          placeholder="Enter text"
          value={search}
        />
        <IonButton color="primary" onClick={handleClick}>Search</IonButton>
        {isLoading && <IonSpinner />}
        {!isLoading && <CardResults hits={data?.hits?.hits} total={data?.hits?.total}/>}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
