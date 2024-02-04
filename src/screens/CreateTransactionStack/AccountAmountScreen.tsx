import {useMemo, useState} from 'react';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import AmountTextField from 'components/@common/TextFields/AmountTextField';
import useAccount from 'hooks/useAccount';
import LeftButton from 'components/screens/CreateTransactionStack/LeftButton';
import RightButton from 'components/screens/CreateTransactionStack/RightButton';
import Container from 'components/screens/CreateTransactionStack/Container';
import {NewAccount} from 'types/account';

type AccountAmountScreenProps = {
  route: CreateTransactionStackRouteProp<'AccountAmount'>;
};

/** 거래 추가 Step 4 */
export default function AccountAmountScreen({
  route: {params},
}: AccountAmountScreenProps) {
  const {isUpdateStep, accountIndex} = params;
  const {account, balance} = useAccount({accountIndex});

  const [updatedAccount, setUpdatedAccount] = useState<NewAccount>(account);

  const disabled = useMemo(
    () => updatedAccount.amount === 0,
    [updatedAccount.amount],
  );

  return (
    <Container
      screen="AccountAmount"
      accountIndex={accountIndex}
      header={{title: '금액을 입력해주세요'}}
      fixedBottomComponent={
        <>
          <LeftButton isUpdateStep={isUpdateStep} />
          <RightButton
            account={updatedAccount}
            disabled={disabled}
            nextScreen="TransactionConfirmation"
            isUpdateStep={isUpdateStep}
            accountIndex={accountIndex}
          />
        </>
      }>
      <AmountTextField
        balance={balance}
        account={updatedAccount}
        onChange={amount => setUpdatedAccount(prev => ({...prev, amount}))}
      />
    </Container>
  );
}
