import {useMemo, useState} from 'react';
import {cloneDeep} from 'lodash';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import LeftButton from 'components/CreateTransactionStack/LeftButton';
import RightButton from 'components/CreateTransactionStack/RightButton';
import {NewAccountUnion} from 'types/account';
import {NewTransaction} from 'types/transaction';

type DebitCreditDeciderScreenProps = {
  route: CreateTransactionStackRouteProp<'AccountCategory'>;
};

/** 거래 추가 Step 3 */
export default function AccountCategoryScreen({
  route: {params},
}: DebitCreditDeciderScreenProps) {
  const {transaction: prevTransaction, isUpdateStep, accountIndex} = params;

  const [account, setAccount] = useState<NewAccountUnion>(() => {
    const index = isUpdateStep
      ? accountIndex
      : prevTransaction.accounts.length - 1;

    return prevTransaction.accounts[index];
  });
  setAccount;

  const transaction = useMemo<NewTransaction>(() => {
    const accounts = cloneDeep(prevTransaction.accounts);

    const index = isUpdateStep
      ? accountIndex
      : prevTransaction.accounts.length - 1;

    accounts[index] = account;

    return {...prevTransaction, accounts};
  }, [account, accountIndex, isUpdateStep, prevTransaction]);

  return (
    <ScreenContainer
      fixedBottomComponent={
        <>
          <LeftButton
            isUpdateStep={isUpdateStep}
            transaction={prevTransaction}
          />
          <RightButton
            nextScreen="AccountAmount"
            isUpdateStep={isUpdateStep}
            transaction={transaction}
          />
        </>
      }>
      <Typography>primary category: {account.category.primary}</Typography>
      <Typography>secondary category: {account.category.secondary}</Typography>
      <Typography>tertiary category: {account.category.tertiary}</Typography>
      <Typography>
        quaternary category: {account.category.quaternary}
      </Typography>
    </ScreenContainer>
  );
}
