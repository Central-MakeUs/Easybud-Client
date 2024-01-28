import {
  TransactionCategoryType,
  DebitCreditType,
} from 'types/components/Transaction';
import {TransactionListVariant} from 'types/screens/LedgerScreen';

export type TransactionDataType<T extends TransactionListVariant> = {
  category: TransactionCategoryType;
  keyNote: string;
  date: string;
  amount?: T extends 'recent' ? number : undefined;
  debitList?: T extends 'default' ? DebitCreditType[] : undefined;
  creditList?: T extends 'default' ? DebitCreditType[] : undefined;
};
