import {axiosApi} from 'apis/axiosInstance';
import {
  IncomeStatusSummaryByDateResponseDto,
  TransactionResponseDto,
} from 'types/dtos/ledger';
import {TransactionDTO} from 'types/dtos/transaction';
import {IncomeStatusSummaryByMonthResponseDto} from 'types/dtos/transaction';

export const transactionApi = {
  getTransactionByDate: async (
    date: string,
  ): Promise<TransactionResponseDto[]> => {
    const response = await axiosApi.get(`/transactions/date/${date}`);
    return response.data.result.transactions;
  },

  getIncomeStatusByMonth: async (
    year: number,
    month: number,
  ): Promise<IncomeStatusSummaryByDateResponseDto> => {
    const response = await axiosApi.get(
      `/financials/income-statement/summary/monthly?year=${year}&month=${month}`,
    );
    return response.data.result;
  },

  postTransaction: async (transaction: TransactionDTO) => {
    const response = await axiosApi.post(`/transactions`, transaction);
    console.log(transaction.date);
    return response;
  },

  getIncomeSummaryByDate: async (
    year: number,
    month: number,
  ): Promise<IncomeStatusSummaryByMonthResponseDto> => {
    const response = await axiosApi.get(
      `/financials/income-statement/summary/daily?year=${year}&month=${month}`,
    );
    return response.data.result.profitLosses;
  },
};
