import {useQuery} from '@tanstack/react-query';
import {ledgerApi} from 'apis/ledgerApi';

export const useGetRecentTransactionQuery = () => {
  const {data: recentTransactionList = []} = useQuery({
    queryKey: ['recentTransactionList'],
    queryFn: ledgerApi.getRecentTransactions,
  });

  return recentTransactionList;
};
