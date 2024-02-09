export type DebitCreditType = {
  name: string;
  amount: string;
};

export type RecentTransactionVariantType =
  | 'EXPENSE_TRANSACTION'
  | 'REVENUE_TRANSACTION'
  | 'ACCOUNT_TRANSFER';

export type TertiaryCategory = {
  id: number;
  name: string;
};

export type SecondaryCategory = {
  id: number;
  name: string;
  subList: TertiaryCategory[];
};

export type PrimaryCategory = {
  id: number;
  name: string;
  subList: SecondaryCategory[];
};

// type CategoryList = Map<number, PrimaryCategory>;
export type CategoryList = PrimaryCategory[];
