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
  [K in AccountTypeName]: AccountType<K>;
}[AccountTypeName];

/** 거래의 8요소*/
export type AccountType<T extends AccountTypeName> = {
  name: T;
  change: Changes[T];
};

/** 계정 이름 */
export type AccountTypeName =
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
export type AccountCategory = {
  /** 대분류 */
  primaryId: number | null;
  /** 중분류 */
  secondaryId: number | null;
  /** 소분류 */
  tertiaryId: number | null;
};

/////////////////////////////////////////////

export type NewAccount = Omit<Account, 'id'>;
