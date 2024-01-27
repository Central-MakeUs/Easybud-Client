import {atom} from 'recoil';
import {localStorageEffect} from 'libs/recoil/utils';
import {RecoilStateKeys} from 'libs/recoil/constants/keys';
import {NewTransaction} from 'types/transaction';

export const transactionState = atom<NewTransaction>({
  key: RecoilStateKeys.Transaction,
  default: {
    date: new Date(),
    accounts: [],
  },
  effects: [localStorageEffect(RecoilStateKeys.Transaction)],
});
