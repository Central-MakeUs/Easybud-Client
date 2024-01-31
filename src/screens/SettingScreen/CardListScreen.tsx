import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {settingApi} from 'apis/settingApi';
import CardItem from 'components/screens/SettingScreen/CardItem';
import ScreenContainer from 'components/@common/ScreenContainer';
import Button from 'components/@common/Buttons/Button';

// TODO 적요 누락 문제 해결 필요
// const mockCardListData = [
//   {
//     cardId: 1,
//     startDate: 2,
//     endDate: 1,
//     paymentDate: 15,
//     name: '엄마카드',
//   },
//   {
//     cardId: 2,
//     startDate: 28,
//     endDate: 27,
//     paymentDate: 1,
//     name: '아빠카드',
//   },
// ];

export default function CardListScreen() {
  const navigation = useNavigation();

  const handlePressAddCardButton = () => navigation.navigate('AddCard');

  const {data: cardListData = []} = useQuery({
    queryKey: ['cardList'],
    queryFn: settingApi.getCardList,
  });

  return (
    <ScreenContainer
      fixedBottomComponent={
        <Button onPress={handlePressAddCardButton}>카드 추가</Button>
      }
      contentContainerStyle={cardListScreenStyles.contentContainer}>
      {cardListData.map(cardData => (
        <CardItem
          cardName={cardData.name}
          usagePeriod={`${cardData.startDate}일 ~ ${cardData.endDate}일`}
          paymentDate={`${cardData.paymentDate}일`}
          keyNote={``}
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
