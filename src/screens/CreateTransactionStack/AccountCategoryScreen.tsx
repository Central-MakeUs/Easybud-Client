import {useMemo} from 'react';
import {useRecoilState} from 'recoil';
import {isEmpty} from 'lodash';
import {accountState} from 'libs/recoil/states/account';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import LeftButton from 'components/CreateTransactionStack/LeftButton';
import RightButton from 'components/CreateTransactionStack/RightButton';
import {AccountCategory, NewAccount} from 'types/account';
import SelectForm from 'components/@common/SelectForm';
import {CategoryName} from 'constants/components/SelectForm';
import Container from 'components/CreateTransactionStack/Container';

type AccountCategoryScreenProps = {
  route: CreateTransactionStackRouteProp<'AccountCategory'>;
};

/** 거래 추가 Step 3 */
export default function AccountCategoryScreen({
  route: {params},
}: AccountCategoryScreenProps) {
  const {isUpdateStep, accountIndex} = params;
  const [account, setAccount] = useRecoilState<NewAccount>(
    accountState(accountIndex),
  );

  const disabled = useMemo(() => {
    return (
      isEmpty(account.category.primary) ||
      isEmpty(account.category.secondary) ||
      isEmpty(account.category.tertiary)
    );
  }, [
    account.category.primary,
    account.category.secondary,
    account.category.tertiary,
  ]);

  const handleChange = (label: keyof AccountCategory, category: string) => {
    setAccount(prev => ({
      ...prev,
      category: {...prev.category, [label]: category},
    }));
  };

  return (
    <Container
      screen="AccountCategory"
      accountIndex={accountIndex}
      header={{title: '자산항목을 선택해 주세요'}}
      fixedBottomComponent={
        <>
          <LeftButton isUpdateStep={isUpdateStep} />
          <RightButton
            disabled={disabled}
            nextScreen="AccountAmount"
            isUpdateStep={isUpdateStep}
            accountIndex={accountIndex}
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
