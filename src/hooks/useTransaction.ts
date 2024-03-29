import {cloneDeep, pullAt} from 'lodash';
import {useCallback, useMemo} from 'react';
import {useRecoilState, useResetRecoilState} from 'recoil';
import {transactionState} from 'libs/recoil/states/transaction';
import {calculateBalance} from 'utils/formatAmountValue';

export default function useTransaction() {
  const [transaction, setTransaction] = useRecoilState(transactionState);
  const {accounts} = transaction;
  const balance = useMemo(() => calculateBalance(accounts), [accounts]);

  const clearTransaction = useResetRecoilState(transactionState);

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
    updateTransaction: setTransaction,
    accounts,
    deleteAccount,
    clearTransaction,
  };
}
