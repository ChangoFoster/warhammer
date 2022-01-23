import { getCards } from '../services/cards';
import { useQuery } from 'react-query';

const useCards = (search: string) => {
    const { data, isLoading, refetch }: { data: any, isLoading: Boolean, refetch: Function } = useQuery(
        'cards',
        () => getCards(search),
        { enabled: false, refetchOnWindowFocus: false }
    );

    return { data, isLoading, refetch };
};

export default useCards;
