import {RootStackNavigationProp} from 'navigators/types';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import Button from 'components/@common/Buttons/Button';

type TransactionConfirmationScreenProps = {
  navigation: RootStackNavigationProp;
};

export default function TransactionConfirmationScreen({
  navigation,
}: TransactionConfirmationScreenProps) {
  const handlePressSaveButton = () => {
    navigation.navigate('Tab', {screen: 'Ledger'});
  };

  const handlePressCreateNewTransactionButton = () => {
    navigation.push('CreateTransactionStack', {screen: 'DebitCreditDecider'});
  };

  return (
    <ScreenContainer
      fixedBottomComponent={
        <>
          {/* note: 이 페이지엔 이전 버튼 없어도 되나 */}
          <Button
            variant="secondary"
            onPress={handlePressCreateNewTransactionButton}>
            새 계정 추가
          </Button>
          <Button onPress={handlePressSaveButton}>저장</Button>
        </>
      }>
      <Typography>TransactionConfirmationScreen</Typography>
    </ScreenContainer>
  );
}
