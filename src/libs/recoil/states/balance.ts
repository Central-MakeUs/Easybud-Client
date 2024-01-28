import {RecoilStateKeys} from 'libs/recoil/constants/keys';
import {transactionState} from 'libs/recoil/states/transaction';
import {selectorFamily} from 'recoil';
import {NewAccount} from 'types/account';
import {isDebit} from 'utils/formatAmountValue';

export const balanceState = selectorFamily<number, {accountIndex?: number}>({
  key: RecoilStateKeys.Balance,
  get:
    ({accountIndex} = {}) =>
    ({get}) => {
      const {accounts} = get(transactionState);
      return calculateBalance(accounts, accountIndex);
    },
});

function calculateBalance(
  accounts: NewAccount[],
  accountIndex: number | undefined,
): number {
  let totalDebit = 0;
  let totalCredit = 0;

  accounts.forEach(({type, amount}, index) => {
    if (!accountIndex || index !== accountIndex) {
      isDebit(type) ? (totalDebit += amount) : (totalCredit += amount);
    }
  });

  return totalDebit - totalCredit;
}
