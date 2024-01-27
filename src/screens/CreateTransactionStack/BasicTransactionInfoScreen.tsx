import {useRecoilState} from 'recoil';
import {transactionState} from 'libs/recoil/states/transaction';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import {NewTransaction} from 'types/transaction';
import DatePicker from 'components/@common/DatePicker';
import InputForm from 'components/@common/InputForm';
import ScreenContainer from 'components/@common/ScreenContainer';
import LeftButton from 'components/CreateTransactionStack/LeftButton';
import RightButton from 'components/CreateTransactionStack/RightButton';

type BasicTransactionInfoScreenProps = {
  route: CreateTransactionStackRouteProp<'BasicTransactionInfo'>;
};

/** 거래 추가 Step 1 */
export default function BasicTransactionInfoScreen({
  route: {params},
}: BasicTransactionInfoScreenProps) {
  const [transaction, setTransaction] = useRecoilState(transactionState);
  console.log('step1: ', transaction, transaction.accounts.length);

  const handleChange = (key: keyof NewTransaction, value: Date | string) =>
    setTransaction(prev => ({...prev, [key]: value}));

  return (
    <ScreenContainer
      title="거래 정보를 입력해주세요"
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
        updateDate={date => handleChange('date', date)}
      />
      <InputForm
        label={'적요'}
        value={transaction.summary ?? ''}
        maxLength={50}
        multiline
        onChangeText={summary => handleChange('summary', summary)}
        placeholder="적요를 작성하세요"
      />
    </ScreenContainer>
  );
}
