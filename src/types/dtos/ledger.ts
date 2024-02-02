export type TransactionResponseDto = {
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
  }[];
};

export type AvailableFundsResponseDto = {
  cash: number;
  ordinaryDeposits: number;
  scheduledDisbursements: number;
  availableFunds: number;
};

export type FinancialStatusResponseDto = {
  totalAssets: number;
  totalLiabilities: number;
  netAssets: number;
  initialNetAssetDefined: boolean;
};

export type IncomeStatusResponseDto = {
  startDate: string;
  endDate: string;
  revenue: number;
  expense: number;
  revenuePercentage: number;
  expensePercentage: number;
};
