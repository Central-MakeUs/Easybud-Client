import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import RightButton from 'components/CreateTransactionStack/RightButton';
import LeftButton from 'components/CreateTransactionStack/LeftButton';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import {useMemo, useState} from 'react';
import {NewTransaction} from 'types/transaction';
import {NewAccountUnion} from 'types/account';

const initialAccount: NewAccountUnion = {
  type: {name: 'Asset', change: 'increase'},
  amount: 0,
  category: {primary: '', secondary: ''},
};

type DebitCreditDeciderScreenProps = {
  route: CreateTransactionStackRouteProp<'DebitCreditDecider'>;
};

/** 거래 추가 Step 2 */
export default function DebitCreditDeciderScreen({
  route: {params},
}: DebitCreditDeciderScreenProps) {
  const {transaction: prevTransaction, isUpdateStep, accountIndex} = params;

  const [transaction, setTransaction] =
    useState<NewTransaction>(prevTransaction);
  setTransaction;

  const account: NewAccountUnion = useMemo(
    () =>
      isUpdateStep ? prevTransaction.accounts[accountIndex] : initialAccount,
    [accountIndex, isUpdateStep, prevTransaction.accounts],
  );

  const disabledRightButton = useMemo(() => {
    if (isUpdateStep) {
      return account.type === prevTransaction.accounts[accountIndex].type;
    }

    return false;
  }, [account.type, accountIndex, isUpdateStep, prevTransaction.accounts]);

  return (
    <ScreenContainer
      fixedBottomComponent={
        <>
          <LeftButton
            isUpdateStep={isUpdateStep}
            transaction={prevTransaction}
          />
          <RightButton
            disabled={disabledRightButton}
            nextScreen="AccountType"
            isUpdateStep={isUpdateStep}
            transaction={transaction}
          />
        </>
      }>
      <Typography>type name: {account.type.name}</Typography>
      <Typography>type change: {account.type.change}</Typography>
    </ScreenContainer>
  );
}
