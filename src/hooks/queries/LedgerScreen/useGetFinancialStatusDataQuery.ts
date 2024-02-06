import {useQuery} from '@tanstack/react-query';
import {ledgerApi} from 'apis/ledgerApi';
import {ledgerQueryKeys} from 'constants/queryKeys/ledger';

export const useGetFinancialStatusDataQuery = () => {
  const {data: financialStatusData} = useQuery({
    initialData: {
      totalAssets: 0,
      totalLiabilities: 0,
      netAssets: 0,
      initialNetAssetDefined: false,
    },
    queryKey: [ledgerQueryKeys.financialStatusData],
    queryFn: ledgerApi.getFinancialStatusData,
  });

  return financialStatusData;
};
