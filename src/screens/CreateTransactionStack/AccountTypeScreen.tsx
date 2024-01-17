import {useNavigation} from '@react-navigation/native';
import Typography from 'components/@common/Typography';
import CreateTransactionScreenContainer from 'components/CreateTransactionStack/CreateTransactionScreenContainer';
import NextButton from 'components/CreateTransactionStack/NextButton';
import PrevButton from 'components/CreateTransactionStack/PrevButton';

export default function AccountTypeScreen() {
  const navigation = useNavigation();

  const handlePressNextButton = () => {
    navigation.navigate('CreateTransactionStack', {screen: 'AccountAmount'});
  };

  const handlePressPrevButton = () => {
    navigation.goBack();
  };

  return (
    <CreateTransactionScreenContainer
      leftButton={<PrevButton onPress={handlePressPrevButton} />}
      rightButton={<NextButton onPress={handlePressNextButton} />}>
      <Typography>AccountTypeScreen</Typography>
    </CreateTransactionScreenContainer>
  );
}
