import {RecoilStateKeys} from 'libs/recoil/constants/keys';
import {transactionState} from 'libs/recoil/states/transaction';
import {selector} from 'recoil';
import {NewAccount} from 'types/account';
import {isDebit} from 'utils/formatAmountValue';

export const balanceState = selector<number>({
  key: RecoilStateKeys.Balance,
  get: ({get}) => calculateBalance(get(transactionState).accounts),
});

function calculateBalance(accounts: NewAccount[]): number {
  let totalDebit = 0;
  let totalCredit = 0;

  accounts.forEach(({type, amount}) => {
    isDebit(type) ? (totalDebit += amount) : (totalCredit += amount);
  });

  return totalDebit - totalCredit;
}
