import {axiosApi} from 'apis/axios';
import {TransactionDto} from 'types/dtos/ledger';

export const transactionApi = {
  getTransactionByDate: async (date: string): Promise<TransactionDto[]> => {
    const response = await axiosApi.get(`/transactions/date/${date}`);
    return response.data.result.transactions;
  },
};
