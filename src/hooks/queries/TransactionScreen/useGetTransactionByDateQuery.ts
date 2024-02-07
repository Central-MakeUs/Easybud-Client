import {useQuery} from '@tanstack/react-query';
import {transactionApi} from 'apis/transactionApi';
import {TransactionQueryKeys} from 'constants/queryKeys/transaction';

export const useGetTransactionByDateQuery = (date: string) => {
  const {data: transactionListByDate = []} = useQuery({
    queryKey: [TransactionQueryKeys.transactionListByDate, date],
    queryFn: () => transactionApi.getTransactionByDate(date),
  });

  return transactionListByDate;
};
