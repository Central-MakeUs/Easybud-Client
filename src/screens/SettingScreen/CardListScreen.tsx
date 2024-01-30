import {View} from 'react-native';
import ScreenContainer from 'components/@common/ScreenContainer';
import Button from 'components/@common/Buttons/Button';
import {useNavigation} from '@react-navigation/native';

export default function CardListScreen() {
  const navigation = useNavigation();

  const handlePressAddCardButton = () => navigation.navigate('AddCard');

  return (
    <ScreenContainer
      fixedBottomComponent={
        <Button onPress={handlePressAddCardButton}>카드 추가</Button>
      }>
      <View />
    </ScreenContainer>
  );
}
