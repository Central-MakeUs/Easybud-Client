import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import LeftButton from 'components/CreateTransactionStack/LeftButton';
import RightButton from 'components/CreateTransactionStack/RightButton';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import {useMemo, useState} from 'react';
import {NewTransaction} from 'types/transaction';

const initialTransaction: NewTransaction = {date: new Date(), accounts: []};

type BasicTransactionInfoScreenProps = {
  route: CreateTransactionStackRouteProp<'BasicTransactionInfo'>;
};

/** 거래 추가 Step 1 */
export default function BasicTransactionInfoScreen({
  route: {params},
}: BasicTransactionInfoScreenProps) {
  const [transaction, setTransaction] = useState<NewTransaction>(
    params?.isUpdateStep ? params.transaction : initialTransaction,
  );
  setTransaction;

  const disabledRightButton = useMemo(() => {
    if (params?.isUpdateStep) {
      const {transaction: prevTransaction} = params;

      return (
        prevTransaction.summary === transaction.summary ||
        prevTransaction.date === transaction.date
      );
    }

    return false;
  }, [params, transaction.date, transaction.summary]);

  return (
    <ScreenContainer
      fixedBottomComponent={
        <>
          {params?.isUpdateStep ? (
            <LeftButton isUpdateStep transaction={params.transaction} />
          ) : null}
          <RightButton
            nextScreen="DebitCreditDecider"
            transaction={transaction}
            isUpdateStep={params?.isUpdateStep}
            disabled={disabledRightButton}
          />
        </>
      }>
      <Typography>date: {transaction.date.toDateString()}</Typography>
      <Typography>summary: {transaction.summary}</Typography>
    </ScreenContainer>
  );
}
