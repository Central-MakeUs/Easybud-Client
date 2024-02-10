export type AccountTypeDTO = {
  typeName: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE';
  typeState: 'INCREASE' | 'DECREASE' | 'OCCURRENCE';
};

export type TransactionDTO = {
  date: Date;
  summary: string;
  accounts: {
    accountType: AccountTypeDTO;
    amount: number;
    tertiaryCategoryId: number;
    cardId?: number;
  }[];
};
