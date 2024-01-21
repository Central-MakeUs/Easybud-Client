import {useMemo, useState} from 'react';
import {cloneDeep, isEqual} from 'lodash';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import RightButton from 'components/CreateTransactionStack/RightButton';
import LeftButton from 'components/CreateTransactionStack/LeftButton';
import {NewTransaction} from 'types/transaction';
import {NewAccountUnion} from 'types/account';

export const initialAccount: NewAccountUnion = {
  type: {name: 'Asset', change: 'increase'},
  amount: 0,
  category: {primary: '', secondary: ''},
};

export type AccountTypeScreenProps = {
  route: CreateTransactionStackRouteProp<'AccountType'>;
};

/** 거래 추가 Step 2 */
export default function AccountTypeScreen({
  route: {params},
}: AccountTypeScreenProps) {
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

  const disabledRightButton = useMemo(() => {
    return (
      isUpdateStep &&
      isEqual(account.type, prevTransaction.accounts[accountIndex].type)
    );
  }, [account, accountIndex, isUpdateStep, prevTransaction.accounts]);

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
            nextScreen="AccountCategory"
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
