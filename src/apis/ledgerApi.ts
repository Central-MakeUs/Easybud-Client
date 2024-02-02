import {axiosApi} from 'apis/axios';
import {
  AvailableFundsResponseDto,
  FinancialStatusResponseDto,
  IncomeStatusResponseDto,
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

  getIncomeStatusData: async (
    startDate: string,
    endDate: string,
  ): Promise<IncomeStatusResponseDto> => {
    const response = await axiosApi.get(
      `/financials/income-statement?startDate=${startDate}&endDate=${endDate}`,
    );
    return response.data.result;
  },
};
