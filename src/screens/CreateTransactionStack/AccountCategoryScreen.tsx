import {useMemo, useState} from 'react';
import {cloneDeep, isEmpty} from 'lodash';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import ScreenContainer from 'components/@common/ScreenContainer';
import LeftButton from 'components/CreateTransactionStack/LeftButton';
import RightButton from 'components/CreateTransactionStack/RightButton';
import {AccountCategory, NewAccount} from 'types/account';
import {NewTransaction} from 'types/transaction';
import SelectForm from 'components/@common/SelectForm';
import {CategoryName} from 'constants/SelectForm';

type AccountCategoryScreenProps = {
  route: CreateTransactionStackRouteProp<'AccountCategory'>;
};

/** 거래 추가 Step 3 */
export default function AccountCategoryScreen({
  route: {params},
}: AccountCategoryScreenProps) {
  const {transaction: prevTransaction, isUpdateStep, accountIndex} = params;

  const [account, setAccount] = useState<NewAccount>(() => {
    const index = isUpdateStep
      ? accountIndex
      : prevTransaction.accounts.length - 1;

    return prevTransaction.accounts[index];
  });
  setAccount;

  const transaction = useMemo<NewTransaction>(() => {
    const accounts = cloneDeep(prevTransaction.accounts);

    const index = isUpdateStep
      ? accountIndex
      : prevTransaction.accounts.length - 1;

    accounts[index] = account;

    return {...prevTransaction, accounts};
  }, [account, accountIndex, isUpdateStep, prevTransaction]);

  const disabled = useMemo(() => {
    return (
      isEmpty(account.category.primary) || isEmpty(account.category.secondary)
    );
  }, [account.category.primary, account.category.secondary]);

  const handleChange = (label: keyof AccountCategory, category: string) => {
    setAccount(prev => ({
      ...prev,
      category: {...prev.category, [label]: category},
    }));
  };

  return (
    <ScreenContainer
      fixedBottomComponent={
        <>
          <LeftButton
            isUpdateStep={isUpdateStep}
            transaction={prevTransaction}
          />
          <RightButton
            disabled={disabled}
            nextScreen="AccountAmount"
            isUpdateStep={isUpdateStep}
            transaction={transaction}
          />
        </>
      }>
      <SelectForm
        value={account.category.primary}
        label={CategoryName.primary}
        items={dummyCategories}
        onSelect={category => handleChange('primary', category)}
      />
      <SelectForm
        value={account.category.secondary}
        label={CategoryName.secondary}
        items={dummyCategories}
        onSelect={category => handleChange('secondary', category)}
      />
      <SelectForm
        value={account.category.tertiary}
        label={CategoryName.tertiary}
        items={dummyCategories}
        onSelect={category => handleChange('tertiary', category)}
      />
    </ScreenContainer>
  );
}

const dummyCategories = [
  '현금',
  '보통예금',
  '정기예금',
  '유가증권',
  '기타유동자산',
];
