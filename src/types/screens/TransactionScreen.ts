import {
  TransactionCategoryType,
  DebitCreditType,
} from 'types/components/Transaction';

export type TransactionDataType = {
  category: TransactionCategoryType;
  keyNote: string;
  date: string;
  debitList: DebitCreditType[];
  creditList: DebitCreditType[];
};
