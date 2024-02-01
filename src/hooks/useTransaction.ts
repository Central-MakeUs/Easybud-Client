import {balanceState} from 'libs/recoil/states/balance';
import {transactionState} from 'libs/recoil/states/transaction';
import {cloneDeep, pullAt} from 'lodash';
import {useCallback} from 'react';
import {useRecoilState, useRecoilValue, useResetRecoilState} from 'recoil';
import {NewTransaction} from 'types/transaction';

export default function useTransaction() {
  const [transaction, setTransaction] = useRecoilState(transactionState);
  const balance = useRecoilValue(balanceState({}));

  const clearTransaction = useResetRecoilState(transactionState);

  const {accounts} = transaction;

  const updateTransaction = (key: keyof NewTransaction, value: Date | string) =>
    setTransaction(prev => ({...prev, [key]: value}));

  const deleteAccount = useCallback(
    (index: number) => {
      const newAccounts = cloneDeep(accounts);

      if (index >= accounts.length) {
        console.error(
          `지우고자 하는 계정 인덱스(${index})가 범위를 벗어납니다.`,
        );
        return;
      }

      pullAt(newAccounts, index);

      setTransaction(prevState => ({...prevState, accounts: newAccounts}));
    },
    [accounts, setTransaction],
  );

  return {
    balance,
    transaction,
    accounts,
    updateTransaction,
    deleteAccount,
    clearTransaction,
  };
}
