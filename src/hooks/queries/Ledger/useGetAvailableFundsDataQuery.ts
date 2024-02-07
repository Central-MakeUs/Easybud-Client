import {useQuery} from '@tanstack/react-query';
import {ledgerApi} from 'apis/ledgerApi';
import {ledgerQueryKeys} from 'constants/queryKeys/ledger';

export const useGetAvailableFundsDataQuery = () => {
  const {data: availableFundsData} = useQuery({
    queryKey: [ledgerQueryKeys.availableFundsData],
    queryFn: ledgerApi.getAvailableFundsData,
    initialData: {
      cash: 0,
      ordinaryDeposits: 0,
      scheduledDisbursements: 0,
      availableFunds: 0,
    },
  });

  return availableFundsData;
};
