import {axiosApi} from 'apis/axios';
import {
  AvailableFundsResponseDto,
  FinancialStatusResponseDto,
  RecentTransactionResponseDto,
} from 'types/dtos/ledger';

export const ledgerApi = {
  getRecentTransactions: async (): Promise<RecentTransactionResponseDto[]> => {
    const response = await axiosApi.get('/transactions/recent');
    return response.data.result.transactions;
  },

  getAvailableFundsData: async (): Promise<AvailableFundsResponseDto> => {
    const response = await axiosApi.get('/financials/available-funds');
    return response.data.result;
  },

  getFinancialStatusData: async (): Promise<FinancialStatusResponseDto> => {
    const response = await axiosApi.get('/financials/financial-statement');
    return response.data.result;
  },
};
