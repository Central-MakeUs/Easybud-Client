import {useQuery} from '@tanstack/react-query';
import {ledgerApi} from 'apis/ledgerApi';
import {ledgerQueryKeys} from 'constants/queryKeys/ledger';

export const useGetIncomeStatusDataQuery = (
  startDate: string,
  endDate: string,
) => {
  const {
    data: incomeStatusData = {
      startDate: '',
      endDate: '',
      revenue: 0,
      expense: 0,
      revenuePercentage: 0,
      expensePercentage: 0,
    },
  } = useQuery({
    queryKey: [ledgerQueryKeys.incomeStatusData],
    queryFn: () => ledgerApi.getIncomeStatusData(startDate, endDate),
  });

  return {
    revenue: incomeStatusData.revenue,
    expense: incomeStatusData.expense,
    revenuePercentage: incomeStatusData.revenuePercentage,
    expensePercentage: incomeStatusData.expensePercentage,
  };
};
