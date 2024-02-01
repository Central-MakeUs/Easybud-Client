import {useMemo} from 'react';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import RightButton from 'components/CreateTransactionStack/RightButton';
import LeftButton from 'components/CreateTransactionStack/LeftButton';
import AmountTextField from 'components/@common/TextFields/AmountTextField';
import Container from 'components/CreateTransactionStack/Container';
import useAccount from 'hooks/useAccount';

type AccountAmountScreenProps = {
  route: CreateTransactionStackRouteProp<'AccountAmount'>;
};

/** 거래 추가 Step 4 */
export default function AccountAmountScreen({
  route: {params},
}: AccountAmountScreenProps) {
  const {isUpdateStep, accountIndex} = params;
  const {account, updateAccount} = useAccount({accountIndex});

  const disabled = useMemo(() => account.amount === 0, [account.amount]);

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
        accountIndex={accountIndex}
        onChange={amount => updateAccount('amount', amount)}
      />
    </Container>
  );
}
