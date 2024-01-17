import {AccountUnion, NewAccountUnion} from 'types/account';

export type Transaction = {
  id: number;
  /** 거래일 */
  date: Date;
  /** 계정 */
  accounts: AccountUnion[];
  /** 적요 */
  summary?: string | null;
};

/////////////////////////////////////////////

export type NewTransaction = Omit<Transaction, 'id' | 'accounts'> & {
  accounts: NewAccountUnion[];
};
