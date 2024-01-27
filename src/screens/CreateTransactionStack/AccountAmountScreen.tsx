import {useMemo} from 'react';
import {useRecoilState} from 'recoil';
import {accountState} from 'libs/recoil/states/account';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import {NewAccount} from 'types/account';
import RightButton from 'components/CreateTransactionStack/RightButton';
import LeftButton from 'components/CreateTransactionStack/LeftButton';
import AmountTextField from 'components/@common/TextFields/AmountTextField';
import Container from 'components/CreateTransactionStack/Container';

type AccountAmountScreenProps = {
  route: CreateTransactionStackRouteProp<'AccountAmount'>;
};

/** 거래 추가 Step 4 */
export default function AccountAmountScreen({
  route: {params},
}: AccountAmountScreenProps) {
  const {isUpdateStep, accountIndex} = params;
  const [account, setAccount] = useRecoilState<NewAccount>(
    accountState(accountIndex),
  );
  console.log('step4: ', account, accountIndex, isUpdateStep);
  const disabled = useMemo(() => account.amount === 0, [account.amount]);

  const handleChange = (amount: number) =>
    setAccount(prev => ({...prev, amount}));

  return (
    <Container
      title="금액을 입력해주세요"
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
      <AmountTextField account={account} onChange={handleChange} />
    </Container>
  );
}
