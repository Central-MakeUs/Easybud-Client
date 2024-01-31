import {axiosApi} from 'apis/axios';
import {
  AvailableFundsResponseDto,
  FinancialStatusResponseDto,
  TransactionResponseDto,
} from 'types/dtos/ledger';

export const ledgerApi = {
  getRecentTransactions: async (): Promise<TransactionResponseDto[]> => {
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
