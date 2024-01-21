import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import RightButton from 'components/CreateTransactionStack/RightButton';
import LeftButton from 'components/CreateTransactionStack/LeftButton';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import {cloneDeep, isEmpty} from 'lodash';
import {useState, useMemo} from 'react';
import {initialAccount} from 'screens/CreateTransactionStack/AccountTypeScreen';
import {NewAccountUnion} from 'types/account';
import {NewTransaction} from 'types/transaction';

type AccountAmountScreenProps = {
  route: CreateTransactionStackRouteProp<'AccountAmount'>;
};

/** 거래 추가 Step 4 */
export default function AccountAmountScreen({
  route: {params},
}: AccountAmountScreenProps) {
  const {transaction: prevTransaction, isUpdateStep, accountIndex} = params;

  const [account, setAccount] = useState<NewAccountUnion>(
    isUpdateStep ? prevTransaction.accounts[accountIndex] : initialAccount,
  );
  setAccount;

  const transaction = useMemo<NewTransaction>(() => {
    const accounts = cloneDeep(prevTransaction.accounts);

    if (isUpdateStep) {
      accounts[accountIndex] = account;
    } else {
      accounts.push(account);
    }

    return {...prevTransaction, accounts};
  }, [account, accountIndex, isUpdateStep, prevTransaction]);

  const disabled = useMemo(() => {
    return isEmpty(account.amount);
  }, [account.amount]);
  disabled;

  return (
    <ScreenContainer
      fixedBottomComponent={
        <>
          <LeftButton
            isUpdateStep={isUpdateStep}
            transaction={prevTransaction}
          />
          <RightButton
            // disabled={disabled}
            nextScreen="TransactionConfirmation"
            isUpdateStep={isUpdateStep}
            transaction={transaction}
          />
        </>
      }>
      <Typography>amount: {account.amount}</Typography>
    </ScreenContainer>
  );
}
