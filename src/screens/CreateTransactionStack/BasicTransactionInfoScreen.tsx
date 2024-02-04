import {useState} from 'react';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import DatePicker from 'components/@common/DatePicker';
import InputForm from 'components/@common/InputForm';
import useTransaction from 'hooks/useTransaction';
import Container from 'components/screens/CreateTransactionStack/Container';
import LeftButton from 'components/screens/CreateTransactionStack/LeftButton';
import RightButton from 'components/screens/CreateTransactionStack/RightButton';
import {NewTransaction} from 'types/transaction';

type BasicTransactionInfoScreenProps = {
  route: CreateTransactionStackRouteProp<'BasicTransactionInfo'>;
};

/** 거래 추가 Step 1 */
export default function BasicTransactionInfoScreen({
  route: {params},
}: BasicTransactionInfoScreenProps) {
  const {transaction} = useTransaction();

  const [updatedTransaction, setUpdatedTransaction] =
    useState<NewTransaction>(transaction);

  return (
    <Container
      screen="BasicTransactionInfo"
      header={{title: '거래 정보를 입력해주세요'}}
      fixedBottomComponent={
        <>
          {params?.isUpdateStep ? <LeftButton isUpdateStep /> : null}
          <RightButton
            nextScreen="AccountType"
            isUpdateStep={params?.isUpdateStep}
            accountIndex={0}
            transaction={updatedTransaction}
          />
        </>
      }>
      <DatePicker
        date={updatedTransaction.date}
        updateDate={date => setUpdatedTransaction(prev => ({...prev, date}))}
      />
      <InputForm
        label={'적요'}
        value={updatedTransaction.summary ?? ''}
        maxLength={15}
        onChangeText={summary =>
          setUpdatedTransaction(prev => ({...prev, summary}))
        }
        placeholder="적요를 작성하세요"
      />
    </Container>
  );
}
