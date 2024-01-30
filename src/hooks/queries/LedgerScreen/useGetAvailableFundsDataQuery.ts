import {useQuery} from '@tanstack/react-query';
import {ledgerApi} from 'apis/ledgerApi';
import {ledgerQueryKeys} from 'constants/queryKeys/ledger';

export const useGetAvailableFundsDataQuery = () => {
  const {
    data: availableFundsData = {
      cash: 0,
      ordinaryDeposits: 0,
      scheduledDisbursements: 0,
      availableFunds: 0,
    },
  } = useQuery({
    queryKey: [ledgerQueryKeys.availableFundsData],
    queryFn: ledgerApi.getAvailableFundsData,
  });

  return {
    cash: availableFundsData.cash,
    ordinaryDeposits: availableFundsData.ordinaryDeposits,
    scheduledDisbursements: availableFundsData.scheduledDisbursements,
    availableFunds: availableFundsData.availableFunds,
  };
};
