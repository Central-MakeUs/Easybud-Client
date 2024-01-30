export type RecentTransactionDto = {
  transactionId: number;
  date: string;
  summary: string;
  type: string;
  accounts: {
    accountId: number;
    accountType: {
      typeName: string;
      typeState: string;
    };
    primaryCategoryId: number;
    primaryCategoryContent: string;
    secondaryCategoryId: number;
    secondaryCategoryContent: string;
    tertiaryCategoryId: number;
    tertiaryCategoryContent?: string | null;
    amount: number;
  };
};

export type AvailableFundsDto = {
  cash: number;
  ordinaryDeposits: number;
  scheduledDisbursements: number;
  availableFunds: number;
};
