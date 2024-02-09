import {useQuery} from '@tanstack/react-query';
import {ledgerApi} from 'apis/ledgerApi';
import {defaultFinancialStatusData} from 'constants/queries/ledger';
import {ledgerQueryKeys} from 'constants/queryKeys/ledger';

export const useGetFinancialStatusDataQuery = () => {
  const {data: financialStatusData} = useQuery({
    initialData: defaultFinancialStatusData,
    queryKey: [ledgerQueryKeys.financialStatusData],
    queryFn: ledgerApi.getFinancialStatusData,
  });

  return financialStatusData;
};
