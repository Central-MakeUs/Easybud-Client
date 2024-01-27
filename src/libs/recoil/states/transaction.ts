import {DefaultValue, atom, selector, selectorFamily} from 'recoil';
import {cloneDeep} from 'lodash';
import {localStorageEffect} from 'libs/recoil/utils';
import {RecoilStateKeys} from 'libs/recoil/constants/keys';
import {calculateBalance} from 'utils/formatAmountValue';
import {NewTransaction} from 'types/transaction';
import {NewAccount} from 'types/account';

const initialAccount: NewAccount = {
  type: {name: '자산', change: '증가'},
  category: {primary: '', secondary: '', tertiary: ''},
  amount: 0,
};

export const transactionState = atom<NewTransaction>({
  key: RecoilStateKeys.Transaction,
  default: {
    date: new Date(),
    accounts: [],
  },
  effects: [localStorageEffect(RecoilStateKeys.Transaction)],
});

export const accountState = selectorFamily<NewAccount, number>({
  key: RecoilStateKeys.Account,
  get:
    (index: number) =>
    ({get}) => {
      const {accounts} = get(transactionState);
      // 배열의 '마지막 다음' 인덱스에 접근하려 할 때 새 계좌를 추가
      if (index === accounts.length) {
        accounts.push(initialAccount);
      } else if (index > accounts.length) {
        throw new Error(`Index ${index} is out of bounds for accounts array.`);
      }

      return accounts[index];
    },
  set:
    (index: number) =>
    ({get, set}, newAccount: NewAccount | DefaultValue) => {
      if (newAccount instanceof DefaultValue) {
        console.error('instanceof DefaultValue', newAccount);
        return;
      }

      const {accounts: prevAccounts} = get(transactionState);
      const accounts = cloneDeep(prevAccounts);

      if (index > accounts.length) {
        throw new Error(
          `Error: Index ${index} is out of bounds for accounts array.`,
        );
      }

      accounts[index] = newAccount;
      set(transactionState, prevState => ({...prevState, accounts}));
    },
});

export const balanceState = selector<number>({
  key: RecoilStateKeys.Balance,
  get: ({get}) => calculateBalance(get(transactionState).accounts),
});
