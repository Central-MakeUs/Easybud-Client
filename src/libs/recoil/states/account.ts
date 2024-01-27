import {RecoilStateKeys} from 'libs/recoil/constants/keys';
import {transactionState} from 'libs/recoil/states/transaction';
import {cloneDeep} from 'lodash';
import {selectorFamily, DefaultValue} from 'recoil';
import {NewAccount} from 'types/account';

const initialAccount: NewAccount = {
  type: {name: '자산', change: '증가'},
  category: {primary: '', secondary: '', tertiary: ''},
  amount: 0,
};

export const accountState = selectorFamily<NewAccount, number>({
  key: RecoilStateKeys.Account,
  get:
    (index: number) =>
    ({get}) => {
      const {accounts: prevAccounts} = get(transactionState);
      const accounts = cloneDeep(prevAccounts);
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
