export type DebitCreditType = {
  name: string;
  amount: string;
};

export type RecentTransactionVariantType =
  | 'EXPENSE_TRANSACTION'
  | 'REVENUE_TRANSACTION'
  | 'ACCOUNT_TRANSFER';
