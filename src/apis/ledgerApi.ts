import {axiosApi} from 'apis/axios';
import {AvailableFundsDto, RecentTransactionDto} from 'types/dtos/ledger';

export const ledgerApi = {
  getRecentTransactions: async (): Promise<RecentTransactionDto[]> => {
    const response = await axiosApi.get('/transactions/recent');
    return response.data.result.transactions;
  },

  getAvailableFundsData: async (): Promise<AvailableFundsDto> => {
    const response = await axiosApi.get('/financials/available-funds');
    return response.data.result;
  },
};
