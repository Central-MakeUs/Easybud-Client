import {useNavigation} from '@react-navigation/native';
import ScreenContainer from 'components/@common/ScreenContainer';
import Button from 'components/@common/Buttons/Button';
import CardItem from 'components/screens/SettingScreen/CardItem';
import {StyleSheet} from 'react-native';

const mockCardListData = [
  {
    name: '신한카드',
    usagePeriod: '1일 ~ 말일',
    paymentDate: '1일',
    keyNote: '쿠팡',
  },
  {
    name: '신한카드',
    usagePeriod: '1일 ~ 말일',
    paymentDate: '1일',
    keyNote: '쿠팡',
  },
];

export default function CardListScreen() {
  const navigation = useNavigation();

  const handlePressAddCardButton = () => navigation.navigate('AddCard');

  return (
    <ScreenContainer
      fixedBottomComponent={
        <Button onPress={handlePressAddCardButton}>카드 추가</Button>
      }
      contentContainerStyle={cardListScreenStyles.contentContainer}>
      {mockCardListData.map(cardData => (
        <CardItem
          cardName={cardData.name}
          usagePeriod={cardData.usagePeriod}
          paymentDate={cardData.paymentDate}
          keyNote={cardData.keyNote}
        />
      ))}
    </ScreenContainer>
  );
}

const cardListScreenStyles = StyleSheet.create({
  contentContainer: {
    gap: 20,
  },
});
