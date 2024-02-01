import {accountState} from 'libs/recoil/states/account';
import {balanceState} from 'libs/recoil/states/balance';
import {useRecoilState, useRecoilValue} from 'recoil';
import {AccountCategory, AccountTypeUnion, NewAccount} from 'types/account';

export default function useAccount({accountIndex}: {accountIndex: number}) {
  const [account, setAccount] = useRecoilState<NewAccount>(
    accountState(accountIndex),
  );
  const balance = useRecoilValue(balanceState({accountIndex}));

  const updateAccount = (
    field: keyof NewAccount,
    value: AccountTypeUnion | AccountCategory | number,
  ) => {
    setAccount(prev => ({...prev, [field]: value}));
  };

  return {account, balance, updateAccount};
}
