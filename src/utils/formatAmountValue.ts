import {NewAccount} from 'types/account';

export function calculateBalance(accounts: NewAccount[]): number {
  let totalDebit = 0;
  let totalCredit = 0;

  accounts.forEach(({type, amount}) => {
    switch (type.name) {
      case '자산':
        type.change === '증가'
          ? (totalDebit += amount)
          : (totalCredit += amount);
        break;
      case '부채':
        type.change === '증가'
          ? (totalCredit += amount)
          : (totalDebit += amount);
        break;
      case '자본':
        type.change === '증가'
          ? (totalCredit += amount)
          : (totalDebit += amount);
        break;
      case '수익':
        totalCredit += amount;
        break;
      case '비용':
        totalDebit += amount;
        break;
    }
  });

  return totalDebit - totalCredit;
}
