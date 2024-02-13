import {useQuery} from '@tanstack/react-query';
import {ledgerApi} from 'apis/ledgerApi';
import {defaultIncomeStatusData} from 'constants/queries/ledger';
import {ledgerQueryKeys} from 'constants/queryKeys/ledger';

export const useGetIncomeStatusDataQuery = (
  startDate: string,
  endDate: string,
) => {
  const {data: incomeStatusData} = useQuery({
    queryKey: [ledgerQueryKeys.incomeStatusData],
    queryFn: () => ledgerApi.getIncomeStatusData(startDate, endDate),
    placeholderData: defaultIncomeStatusData,
    initialData: defaultIncomeStatusData,
  });

  return incomeStatusData;
};
