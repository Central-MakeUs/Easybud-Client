import {useCallback, useMemo, useState} from 'react';
import {isEmpty} from 'lodash';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import {AccountCategory, NewAccount} from 'types/account';
import SelectForm from 'components/@common/SelectForm';
import {CategoryName} from 'constants/components/SelectForm';
import Container from 'components/screens/CreateTransactionStack/Container';
import useAccount from 'hooks/useAccount';
import LeftButton from 'components/screens/CreateTransactionStack/LeftButton';
import RightButton from 'components/screens/CreateTransactionStack/RightButton';

type AccountCategoryScreenProps = {
  route: CreateTransactionStackRouteProp<'AccountCategory'>;
};

/** 거래 추가 Step 3 */
export default function AccountCategoryScreen({
  route: {params},
}: AccountCategoryScreenProps) {
  const {isUpdateStep, accountIndex} = params;

  const {account} = useAccount({accountIndex});

  const [updatedAccount, setUpdatedAccount] = useState<NewAccount>(account);

  const disabled = useMemo(() => {
    return (
      isEmpty(updatedAccount.category.primary) ||
      isEmpty(updatedAccount.category.secondary) ||
      isEmpty(updatedAccount.category.tertiary)
    );
  }, [
    updatedAccount.category.primary,
    updatedAccount.category.secondary,
    updatedAccount.category.tertiary,
  ]);

  const handleChange = useCallback(
    (key: keyof AccountCategory, category: string) => {
      setUpdatedAccount(prev => ({
        ...prev,
        category: {...prev.category, [key]: category},
      }));
    },
    [],
  );

  return (
    <Container
      screen="AccountCategory"
      accountIndex={accountIndex}
      header={{title: '자산항목을 선택해 주세요'}}
      fixedBottomComponent={
        <>
          <LeftButton isUpdateStep={isUpdateStep} />
          <RightButton
            account={updatedAccount}
            disabled={disabled}
            nextScreen="AccountAmount"
            isUpdateStep={isUpdateStep}
            accountIndex={accountIndex}
          />
        </>
      }>
      <SelectForm
        value={updatedAccount.category.primary}
        label={CategoryName.primary}
        items={dummyCategories}
        onSelect={category => handleChange('primary', category)}
      />
      <SelectForm
        value={updatedAccount.category.secondary}
        label={CategoryName.secondary}
        items={dummyCategories}
        onSelect={category => handleChange('secondary', category)}
      />
      <SelectForm
        value={updatedAccount.category.tertiary}
        label={CategoryName.tertiary}
        items={dummyCategories}
        onSelect={category => handleChange('tertiary', category)}
      />
    </Container>
  );
}

const dummyCategories = [
  '현금',
  '보통예금',
  '정기예금',
  '유가증권',
  '기타유동자산',
];
