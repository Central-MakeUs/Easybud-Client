import {useQuery} from '@tanstack/react-query';
import {ledgerApi} from 'apis/ledgerApi';
import {defaultIncomeStatusData} from 'constants/queries/ledger';
import {ledgerQueryKeys} from 'constants/queryKeys/ledger';

export const useGetIncomeStatusDataQuery = (
  startDate: string,
  endDate: string,
) => {
  const {data: incomeStatusData = defaultIncomeStatusData} = useQuery({
    queryKey: [ledgerQueryKeys.incomeStatusData],
    queryFn: () => ledgerApi.getIncomeStatusData(startDate, endDate),
  });

  return {
    revenue: incomeStatusData.revenue,
    expense: incomeStatusData.expense,
    revenuePercentage: incomeStatusData.revenuePercentage,
    expensePercentage: incomeStatusData.expensePercentage,
    revenueChangePercentage: incomeStatusData.revenueChangePercentage,
    expenseChangePercentage: incomeStatusData.expenseChangePercentage,
  };
};
