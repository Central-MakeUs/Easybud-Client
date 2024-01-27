import {AccountTypeUnion, NewAccount} from 'types/account';

/** 차변 여부 판단 */
export function isDebit(type: AccountTypeUnion) {
  switch (type.name) {
    case '자산':
      return type.change === '증가';
    case '부채':
    case '자본':
      return type.change === '감소';
    case '수익':
      return true;
    case '비용':
      return false;
  }
}

export function calculateBalance(accounts: NewAccount[]): number {
  let totalDebit = 0;
  let totalCredit = 0;

  accounts.forEach(({type, amount}) => {
    isDebit(type) ? (totalDebit += amount) : (totalCredit += amount);
  });

  return totalDebit - totalCredit;
}

export function formatNumber(amount: string): string {
  return amount.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function extractNumbers(str: string) {
  return str.replace(/[^0-9]/g, '');
}
