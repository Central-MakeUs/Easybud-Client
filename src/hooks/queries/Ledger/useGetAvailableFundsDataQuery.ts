import {useQuery} from '@tanstack/react-query';
import {ledgerApi} from 'apis/ledgerApi';
import {defaultavailableFundsData} from 'constants/queries/ledger';
import {ledgerQueryKeys} from 'constants/queryKeys/ledger';

export const useGetAvailableFundsDataQuery = () => {
  const {data: availableFundsData = defaultavailableFundsData} = useQuery({
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
