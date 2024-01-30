import {axiosApi} from 'apis/axios';
import {RecentTransactionType} from 'types/dtos/ledger';

export const ledgerApi = {
  getRecentTransactions: async (): Promise<RecentTransactionType[]> => {
    const response = await axiosApi.get('/transactions/recent');
    return response.data.result.transactions;
  },
};
