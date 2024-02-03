import {CreateTransactionStackRouteProp} from 'navigators/types';
import DatePicker from 'components/@common/DatePicker';
import InputForm from 'components/@common/InputForm';
import useTransaction from 'hooks/useTransaction';
import Container from 'components/screens/CreateTransactionStack/Container';
import LeftButton from 'components/screens/CreateTransactionStack/LeftButton';
import RightButton from 'components/screens/CreateTransactionStack/RightButton';

type BasicTransactionInfoScreenProps = {
  route: CreateTransactionStackRouteProp<'BasicTransactionInfo'>;
};

/** 거래 추가 Step 1 */
export default function BasicTransactionInfoScreen({
  route: {params},
}: BasicTransactionInfoScreenProps) {
  const {transaction, updateTransaction} = useTransaction();

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
          />
        </>
      }>
      <DatePicker
        date={transaction.date}
        updateDate={date => updateTransaction('date', date)}
      />
      <InputForm
        label={'적요'}
        value={transaction.summary ?? ''}
        maxLength={15}
        onChangeText={summary => updateTransaction('summary', summary)}
        placeholder="적요를 작성하세요"
      />
    </Container>
  );
}
