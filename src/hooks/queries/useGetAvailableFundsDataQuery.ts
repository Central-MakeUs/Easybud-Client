import {useQuery} from '@tanstack/react-query';
import {ledgerApi} from 'apis/ledgerApi';

export const useGetAvailableFundsDataQuery = () => {
  const {
    data: availableFundsData = {
      cash: 0,
      ordinaryDeposits: 0,
      scheduledDisbursements: 0,
      availableFunds: 0,
    },
  } = useQuery({
    queryKey: ['availableFundsData'],
    queryFn: ledgerApi.getAvailableFundsData,
  });

  return availableFundsData;
};
