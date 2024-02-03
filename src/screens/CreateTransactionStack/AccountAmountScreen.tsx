import {useMemo} from 'react';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import AmountTextField from 'components/@common/TextFields/AmountTextField';
import useAccount from 'hooks/useAccount';
import LeftButton from 'components/screens/CreateTransactionStack/LeftButton';
import RightButton from 'components/screens/CreateTransactionStack/RightButton';
import Container from 'components/screens/CreateTransactionStack/Container';

type AccountAmountScreenProps = {
  route: CreateTransactionStackRouteProp<'AccountAmount'>;
};

/** 거래 추가 Step 4 */
export default function AccountAmountScreen({
  route: {params},
}: AccountAmountScreenProps) {
  const {isUpdateStep, accountIndex} = params;
  const {account, balance, updateAccount} = useAccount({accountIndex});

  const disabled = useMemo(() => account.amount === 0, [account.amount]);

  if (!account) {
    return null;
  }

  return (
    <Container
      screen="AccountAmount"
      accountIndex={accountIndex}
      header={{title: '금액을 입력해주세요'}}
      fixedBottomComponent={
        <>
          <LeftButton isUpdateStep={isUpdateStep} />
          <RightButton
            disabled={disabled}
            nextScreen="TransactionConfirmation"
            isUpdateStep={isUpdateStep}
            accountIndex={accountIndex}
          />
        </>
      }>
      <AmountTextField
        balance={balance}
        account={account}
        onChange={amount => updateAccount('amount', amount)}
      />
    </Container>
  );
}
