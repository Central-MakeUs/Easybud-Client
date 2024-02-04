import {useState} from 'react';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import DatePicker from 'components/@common/DatePicker';
import useTransaction from 'hooks/useTransaction';
import Container from 'components/screens/CreateTransactionStack/Container';
import LeftButton from 'components/screens/CreateTransactionStack/LeftButton';
import RightButton from 'components/screens/CreateTransactionStack/RightButton';
import {NewTransaction} from 'types/transaction';
import InputBottomSheet from 'components/@common/InputBottomSheet';
import CommonSelectItem from 'components/@common/CommonSelectItem';

type BasicTransactionInfoScreenProps = {
  route: CreateTransactionStackRouteProp<'BasicTransactionInfo'>;
};

/** 거래 추가 Step 1 */
export default function BasicTransactionInfoScreen({
  route: {params},
}: BasicTransactionInfoScreenProps) {
  const {transaction} = useTransaction();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

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
      <CommonSelectItem
        label={'적요'}
        onPress={open}
        value={updatedTransaction.summary ?? ''}
        placeholder="적요를 입력해주세요"
        bottomSheet={
          <InputBottomSheet
            text={updatedTransaction.summary ?? ''}
            isOpen={isOpen}
            onOpen={open}
            onClose={close}
            placeholder="적요를 입력해주세요"
            setText={summary =>
              setUpdatedTransaction(prev => ({...prev, summary}))
            }
          />
        }
      />
    </Container>
  );
}
