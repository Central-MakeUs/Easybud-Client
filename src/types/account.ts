/** 모든 계정 타입을 포함하는 유니온 타입 */
export type AccountUnion = {
  [K in AccountName]: Account<K>;
}[AccountName];

/** 계정 */
type Account<T extends AccountName> = {
  id: number;
  /** 거래의 8요소 중 하나에 해당하는 계정 타입 */
  type: AccountType<T>;
  /** 계정의 대분류, 중분류, 소분류, 세분류를 포함하는 분류 */
  category: AccountCategory;
  amount: number;
  memo?: string | null;
};

/////////////////////////////////////////////

/** 거래의 8요소*/
type AccountType<T extends AccountName> = {
  name: T;
  change: Changes[T];
};

/** 계정 이름 */
type AccountName =
  | 'Asset' // 자산
  | 'Liability' // 부채
  | 'Equity' // 자본
  | 'Revenue' // 수익
  | 'Expense'; // 비용

type Changes = {
  Asset: Change;
  Liability: Change;
  Equity: Change;
  Revenue: Occurrence;
  Expense: Occurrence;
};

/** 증가/감소 */
type Change = 'increase' | 'decrease';

/** 발생 */
type Occurrence = 'occurrence';

/////////////////////////////////////////////

/** 계정 분류 */
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

export type NewAccountUnion = {
  [K in AccountName]: NewAccount<K>;
}[AccountName];

type NewAccount<T extends AccountName> = Omit<Account<T>, 'id'>;
