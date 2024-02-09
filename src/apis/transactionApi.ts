import {axiosApi} from 'apis/axiosInstance';
import {AccountTypeName, AccountTypeUnion, NewAccount} from 'types/account';
import {
  IncomeStatusSummaryByDateResponseDto,
  TransactionResponseDto,
} from 'types/dtos/ledger';
import {NewTransaction} from 'types/transaction';

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

  postTransaction: async ({date, summary, accounts}: NewTransaction) => {
    const transactionDTO: TransactionDTO = {
      date: date,
      summary: summary ?? null,
      type: getTransactionType(accounts),
      accounts: accounts.map(({amount, category, type}) => ({
        accountType: getAccountType(type),
        amount,
        tertiaryCategoryId: category.tertiaryId as number,
      })),
    };
    const {data} = await axiosApi.post(`/transactions`, {
      data: transactionDTO,
    });

    return data;
  },
};

function getTransactionType(accounts: NewAccount[]): TransactionTypeDTO {
  const types: string[] = accounts.map(({type}) => type.name);

  if (types.includes('수익') && types.includes('비용')) {
    const amountsByType: {[key in AccountTypeName]: number} = {
      수익: 0,
      자산: 0,
      부채: 0,
      자본: 0,
      비용: 0,
    };

    for (const account of accounts) {
      amountsByType[account.type.name] += account.amount;
    }

    if (amountsByType['수익'] > amountsByType['비용']) {
      return 'REVENUE_TRANSACTION';
    } else {
      return 'EXPENSE_TRANSACTION';
    }
  }

  if (types.includes('수익')) {
    return 'REVENUE_TRANSACTION';
  }

  if (types.includes('비용')) {
    return 'EXPENSE_TRANSACTION';
  }

  return 'ACCOUNT_TRANSFER';
}

function getAccountType(type: AccountTypeUnion): AccountTypeDTO {
  const typeName = (() => {
    switch (type.name) {
      case '자산':
        return 'ASSET';
      case '부채':
        return 'LIABILITY';
      case '자본':
        return 'EQUITY';
      case '수익':
        return 'REVENUE';
      case '비용':
        return 'EXPENSE';
    }
  })();

  const typeState = (() => {
    switch (type.change) {
      case '증가':
        return 'INCREASE';
      case '감소':
        return 'DECREASE';
      case '발생':
        return 'OCCURRENCE';
    }
  })();

  return {typeName, typeState};
}

type TransactionTypeDTO =
  | 'EXPENSE_TRANSACTION'
  | 'REVENUE_TRANSACTION'
  | 'ACCOUNT_TRANSFER';

type AccountTypeDTO = {
  typeName: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE';
  typeState: 'INCREASE' | 'DECREASE' | 'OCCURRENCE';
};

type TransactionDTO = {
  date: Date;
  summary: string | null;
  type: TransactionTypeDTO;
  accounts: {
    accountType: AccountTypeDTO;
    amount: number;
    tertiaryCategoryId: number;
    cardId?: number;
  }[];
};
