import {RecoilStateKeys} from 'libs/recoil/constants/keys';
import {transactionState} from 'libs/recoil/states/transaction';
import {cloneDeep} from 'lodash';
import {selectorFamily, DefaultValue} from 'recoil';
import {NewAccount} from 'types/account';

const initialAccount: NewAccount = {
  type: {name: '자산', change: '증가'},
  category: {primaryId: null, secondaryId: null, tertiaryId: null},
  amount: 0,
};

export const accountState = selectorFamily<NewAccount, number>({
  key: RecoilStateKeys.Account,
  get:
    index =>
    ({get}) => {
      const {accounts: prevAccounts} = get(transactionState);
      const accounts = cloneDeep(prevAccounts);

      if (index > accounts.length) {
        throw new Error(
          `Error: Index ${index} is out of bounds for accounts array. (get recoil state)`,
        );
      }

      if (index === accounts.length) {
        return initialAccount;
      }

      return accounts[index];
    },
  set:
    index =>
    ({get, set}, newAccount: NewAccount | DefaultValue) => {
      if (newAccount instanceof DefaultValue) {
        throw new Error('Error: Not Account Type (instanceof DefaultValue)');
      }

      const {accounts: prevAccounts} = get(transactionState);
      const accounts = cloneDeep(prevAccounts);

      // 배열의 '마지막 다음' 인덱스에 접근하려 할 때 새 계좌를 추가
      if (index === accounts.length) {
        accounts.push(initialAccount);
      } else if (index > accounts.length) {
        throw new Error(
          `Error: Index ${index} is out of bounds for accounts array. (set recoil state)`,
        );
      }

      accounts[index] = newAccount;
      set(transactionState, prevState => ({...prevState, accounts}));
    },
});
