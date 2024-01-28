import {useNavigation} from '@react-navigation/native';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import LeftButton from 'components/screens/CreateTransactionStack/LeftButton';
import RightButton from 'components/screens/CreateTransactionStack/RightButton';

export default function AccountTypeScreen() {
  const navigation = useNavigation();

  const handlePressNextButton = () => {
    navigation.navigate('CreateTransactionStack', {screen: 'AccountAmount'});
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
