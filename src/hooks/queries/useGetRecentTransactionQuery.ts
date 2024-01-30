import {useQuery} from '@tanstack/react-query';
import {ledgerApi} from 'apis/ledgerApi';
import {ledgerQueryKeys} from 'constants/queryKeys/ledger';

export const useGetRecentTransactionQuery = () => {
  const {data: recentTransactionList = []} = useQuery({
    queryKey: [ledgerQueryKeys.recentTransactionList],
    queryFn: ledgerApi.getRecentTransactions,
  });

  return recentTransactionList;
};
