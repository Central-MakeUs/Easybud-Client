import {useQuery} from '@tanstack/react-query';
import {transactionApi} from 'apis/transactionApi';
import {TransactionQueryKeys} from 'constants/queryKeys/transaction';

export default function useGetIncomeSummaryByDateQuery(
  year: number,
  month: number,
) {
  const {data: incomeStatusByMonth = []} = useQuery({
    queryKey: [TransactionQueryKeys.getIncomeSummaryByDate, year, month],
    queryFn: () => transactionApi.getIncomeSummaryByDate(year, month),
  });

  return incomeStatusByMonth;
}
