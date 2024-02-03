import useTransaction from 'hooks/useTransaction';
import {accountState} from 'libs/recoil/states/account';
import {useCallback, useMemo} from 'react';
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

  const updateAccount = useCallback(
    (
      field: keyof NewAccount,
      value: AccountTypeUnion | Partial<AccountCategory> | number,
    ) => {
      if (field === 'category') {
        setAccount(prev => ({
          ...prev,
          category: {
            ...account.category,
            ...(value as Partial<AccountCategory>),
          },
        }));
      } else {
        setAccount(prev => ({...prev, [field]: value}));
      }
    },
    [account, setAccount],
  );

  return {account, balance, updateAccount};
}
