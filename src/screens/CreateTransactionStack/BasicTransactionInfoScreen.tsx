import DatePicker from 'components/@common/DatePicker';
import InputForm from 'components/@common/InputForm';
import ScreenContainer from 'components/@common/ScreenContainer';
import LeftButton from 'components/CreateTransactionStack/LeftButton';
import RightButton from 'components/CreateTransactionStack/RightButton';
import {isEqual, some} from 'lodash';
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

      return some(['summary', 'date'], (key: keyof NewTransaction) =>
        isEqual(prevTransaction[key], transaction[key]),
      );
    }

    return false;
  }, [params, transaction]);

  const handleChange = (key: keyof NewTransaction, value: Date | string) =>
    setTransaction(prev => ({...prev, [key]: value}));

  return (
    <ScreenContainer
      fixedBottomComponent={
        <>
          {params?.isUpdateStep ? (
            <LeftButton isUpdateStep transaction={params.transaction} />
          ) : null}
          <RightButton
            nextScreen="AccountType"
            transaction={transaction}
            isUpdateStep={params?.isUpdateStep}
            disabled={disabledRightButton}
          />
        </>
      }>
      <DatePicker
        date={transaction.date}
        updateDate={date => handleChange('date', date)}
      />
      <InputForm
        label={'적요'}
        value={transaction.summary ?? ''}
        maxLength={15}
        onChangeText={summary => handleChange('summary', summary)}
        placeholder="적요를 작성하세요"
      />
    </ScreenContainer>
  );
}
