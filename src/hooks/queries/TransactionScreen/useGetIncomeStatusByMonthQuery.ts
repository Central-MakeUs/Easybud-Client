import {useQuery} from '@tanstack/react-query';
import {transactionApi} from 'apis/transactionApi';
import {defaultIncomeStatusByMonth} from 'constants/queries/transaction';

export const useGetIncomeStatusByMonthQuery = (year: number, month: number) => {
  const {data: incomeStatusByMonth = defaultIncomeStatusByMonth} = useQuery({
    queryKey: ['incomeStatusByMonth', year, month],
    queryFn: () => transactionApi.getIncomeStatusByMonth(year, month),
  });

  return incomeStatusByMonth;
};
