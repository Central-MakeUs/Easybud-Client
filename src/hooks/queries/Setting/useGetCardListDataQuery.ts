import {useQuery} from '@tanstack/react-query';
import {settingApi} from 'apis/settingApi';
import {settingQueryKeys} from 'constants/queryKeys/setting';

export const useGetCardListDataQuery = () => {
  const {data: cardListData = []} = useQuery({
    queryKey: [settingQueryKeys.cardList],
    queryFn: settingApi.getCardList,
  });

  return cardListData;
};
