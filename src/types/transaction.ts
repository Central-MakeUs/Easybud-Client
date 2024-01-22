import {Account, NewAccount} from 'types/account';

export type Transaction = {
  id: number;
  /** 거래일 */
  date: Date;
  /** 계정 */
  accounts: Account[];
  /** 적요 */
  summary?: string | null;
};

/////////////////////////////////////////////

export type NewTransaction = Omit<Transaction, 'id' | 'accounts'> & {
  accounts: NewAccount[];
};
