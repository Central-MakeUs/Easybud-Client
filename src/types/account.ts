/** 계정 */
export type Account = {
  id: number;
  /** 거래의 8요소 중 하나에 해당하는 계정 타입 */
  type: AccountTypeUnion;
  /** 계정의 대분류, 중분류, 소분류, 세분류를 포함하는 분류 */
  category: AccountCategory;
  amount: number;
  memo?: string | null;
};

///////////////////////////////////////////// /** 거래의 8요소 중 하나에 해당하는 계정 타입 */

/** 거래의 8요소 중 하나에 해당하는 계정 타입 */
export type AccountTypeUnion = {
  [K in AccountName]: AccountType<K>;
}[AccountName];

/** 거래의 8요소*/
export type AccountType<T extends AccountName> = {
  name: T;
  change: Changes[T];
};

/** 계정 이름 */
type AccountName =
  | '자산' // Asset
  | '부채' // Liability
  | '자본' // Equity
  | '수익' // Revenue
  | '비용'; // Expense

type Changes = {
  자산: Change;
  부채: Change;
  자본: Change;
  수익: Occurrence;
  비용: Occurrence;
};

/** 증가/감소 */
type Change = '증가' | '감소';

/** 발생 */
type Occurrence = '발생';

///////////////////////////////////////////// /** 계정의 대분류, 중분류, 소분류, 세분류를 포함하는 분류 */

/** 계정의 대분류, 중분류, 소분류, 세분류를 포함하는 분류 */
type AccountCategory = {
  /** 대분류 */
  primary: string;
  /** 중분류 */
  secondary: string;
  /** 소분류 */
  tertiary?: string | null;
  /** 세분류 */
  quaternary?: string | null;
};

/////////////////////////////////////////////

export type NewAccount = Omit<Account, 'id'>;
