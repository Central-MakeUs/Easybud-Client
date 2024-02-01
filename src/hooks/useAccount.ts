import useTransaction from 'hooks/useTransaction';
import {accountState} from 'libs/recoil/states/account';
import {useMemo} from 'react';
import {useRecoilState} from 'recoil';
import {AccountCategory, AccountTypeUnion, NewAccount} from 'types/account';
import {calculateBalance} from 'utils/formatAmountValue';

export default function useAccount({accountIndex}: {accountIndex: number}) {
  const {accounts} = useTransaction();
  const [account, setAccount] = useRecoilState<NewAccount>(
    accountState(accountIndex),
  );

  const balance = useMemo(() => {
    return calculateBalance(accounts, accountIndex);
  }, [accountIndex, accounts]);

  const updateAccount = (
    field: keyof NewAccount,
    value: AccountTypeUnion | AccountCategory | number,
  ) => {
    setAccount(prev => ({...prev, [field]: value}));
  };

  return {account, balance, updateAccount};
}
