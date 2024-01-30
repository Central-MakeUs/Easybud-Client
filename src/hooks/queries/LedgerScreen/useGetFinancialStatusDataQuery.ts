import {useQuery} from '@tanstack/react-query';
import {ledgerApi} from 'apis/ledgerApi';
import {ledgerQueryKeys} from 'constants/queryKeys/ledger';

export const useGetFinancialStatusDataQuery = () => {
  const {
    data: financialStatusData = {
      totalAssets: 0,
      totalLiabilities: 0,
      netAssets: 0,
    },
  } = useQuery({
    queryKey: [ledgerQueryKeys.financialStatusData],
    queryFn: ledgerApi.getFinancialStatusData,
  });

  return {
    totalAssets: financialStatusData.totalAssets,
    totalLiabilities: financialStatusData.totalLiabilities,
    netAssets: financialStatusData.netAssets,
  };
};
