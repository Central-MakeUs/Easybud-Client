import {useNavigation} from '@react-navigation/native';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import LeftButton from 'components/screen/CreateTransactionStack/LeftButton';
import RightButton from 'components/screen/CreateTransactionStack/RightButton';

export default function AccountAmountScreen() {
  const navigation = useNavigation();

  const handlePressNextButton = () => {
    navigation.navigate('CreateTransactionStack', {
      screen: 'TransactionConfirmation',
    });
  };

  const handlePressPrevButton = () => {
    navigation.goBack();
  };

  return (
    <ScreenContainer
      fixedBottomComponent={
        <>
          <LeftButton onPress={handlePressPrevButton} />
          <RightButton onPress={handlePressNextButton} />
        </>
      }>
      <Typography>AccountAmountScreen</Typography>
    </ScreenContainer>
  );
}
