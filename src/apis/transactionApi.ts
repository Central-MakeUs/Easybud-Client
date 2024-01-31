import {axiosApi} from 'apis/axios';
import {TransactionResponseDto} from 'types/dtos/ledger';

export const transactionApi = {
  getTransactionByDate: async (
    date: string,
  ): Promise<TransactionResponseDto[]> => {
    const response = await axiosApi.get(`/transactions/date/${date}`);
    return response.data.result.transactions;
  },
};
