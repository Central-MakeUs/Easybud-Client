import {useNavigation} from '@react-navigation/native';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import RightButton from 'components/CreateTransactionStack/RightButton';
import LeftButton from 'components/CreateTransactionStack/LeftButton';

export default function DebitCreditDeciderScreen() {
  const navigation = useNavigation();
  const handlePressNextButton = () => {
    navigation.navigate('CreateTransactionStack', {screen: 'AccountType'});
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
      <Typography>DebitCreditDecider</Typography>
    </ScreenContainer>
  );
}