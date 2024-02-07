import {DebitCreditEntity} from 'types/entities/ledger';

export type TransactionResponseDto = {
  transactionId: number;
  date: string;
  summary: string;
  type: string;
  debitAccounts: DebitCreditEntity[];
  creditAccounts: DebitCreditEntity[];
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
  revenueChangePercentage: number;
  expenseChangePercentage: number;
};

export type IncomeStatusSummaryByDateResponseDto = {
  revenue: number;
  expense: number;
  profitLoss: number;
};
