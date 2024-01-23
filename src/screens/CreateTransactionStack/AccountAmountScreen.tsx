import ScreenContainer from 'components/@common/ScreenContainer';
import RightButton from 'components/CreateTransactionStack/RightButton';
import LeftButton from 'components/CreateTransactionStack/LeftButton';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import {cloneDeep} from 'lodash';
import {useState, useMemo} from 'react';
import {NewAccount} from 'types/account';
import {NewTransaction} from 'types/transaction';
import AmountTextField from 'components/@common/TextFields/AmountTextField';
import {calculateBalance} from 'utils/formatAmountValue';

type AccountAmountScreenProps = {
  route: CreateTransactionStackRouteProp<'AccountAmount'>;
};

/** 거래 추가 Step 4 */
export default function AccountAmountScreen({
  route: {params},
}: AccountAmountScreenProps) {
  const {transaction: prevTransaction, isUpdateStep, accountIndex} = params;

  const [account, setAccount] = useState<NewAccount>(() => {
    const index = isUpdateStep
      ? accountIndex
      : prevTransaction.accounts.length - 1;

    return prevTransaction.accounts[index];
  });

  const transaction = useMemo<NewTransaction>(() => {
    const accounts = cloneDeep(prevTransaction.accounts);

    const index = isUpdateStep
      ? accountIndex
      : prevTransaction.accounts.length - 1;

    accounts[index] = account;

    return {...prevTransaction, accounts};
  }, [account, accountIndex, isUpdateStep, prevTransaction]);

  const disabled = useMemo(() => {
    return account.amount === 0;
  }, [account.amount]);

  const handleChange = (amount: number) =>
    setAccount(prev => ({...prev, amount}));

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
            nextScreen="TransactionConfirmation"
            isUpdateStep={isUpdateStep}
            transaction={transaction}
          />
        </>
      }>
      <AmountTextField
        amount={account.amount}
        balance={calculateBalance(transaction.accounts)}
        onChange={handleChange}
      />
    </ScreenContainer>
  );
}
