import {axiosApi} from 'apis/axios';
import {
  AvailableFundsDto,
  FinancialStatusDto,
  RecentTransactionDto,
} from 'types/dtos/ledger';

export const ledgerApi = {
  getRecentTransactions: async (): Promise<RecentTransactionDto[]> => {
    const response = await axiosApi.get('/transactions/recent');
    return response.data.result.transactions;
  },

  getAvailableFundsData: async (): Promise<AvailableFundsDto> => {
    const response = await axiosApi.get('/financials/available-funds');
    return response.data.result;
  },

  getFinancialStatusData: async (): Promise<FinancialStatusDto> => {
    const response = await axiosApi.get('/financials/financial-statement');
    return response.data.result;
  },
};
