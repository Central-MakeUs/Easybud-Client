import {axiosApi} from 'apis/axios';
import {RecentTransactionType} from 'types/dtos/Ledger';

export const ledgerApi = {
  getRecentTransactions: async (): Promise<RecentTransactionType[]> => {
    const response = await axiosApi.get('/transactions/recent');
    return response.data.result.transactions;
  },
};
