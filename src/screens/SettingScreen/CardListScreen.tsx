import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useGetCardListDataQuery} from 'hooks/queries/SettingScreen/useGetCardListDataQuery';
import CardItem from 'components/screens/SettingScreen/CardItem';
import ScreenContainer from 'components/@common/ScreenContainer';
import Button from 'components/@common/Buttons/Button';
import Typography from 'components/@common/Typography';

export default function CardListScreen() {
  const cardListData = useGetCardListDataQuery();
  const navigation = useNavigation();

  const handlePressAddCardButton = () => navigation.navigate('AddCard');

  return (
    <ScreenContainer
      fixedBottomComponent={
        <Button onPress={handlePressAddCardButton}>카드 추가</Button>
      }
      contentContainerStyle={cardListScreenStyles.contentContainer}>
      {cardListData.length ? (
        cardListData.map(cardData => (
          <CardItem
            key={cardData.cardId}
            cardId={cardData.cardId}
            cardName={cardData.name}
            usagePeriod={`${cardData.startDate}일 ~ ${cardData.endDate}일`}
            paymentDate={`${cardData.paymentDate}일`}
            keyNote={cardData.summary}
          />
        ))
      ) : (
        <View style={cardListScreenStyles.noCardTextContainer}>
          <Typography type={'Body1Semibold'} color={'gray6'}>
            등록된 카드가 없습니다.
          </Typography>
          <Typography type={'Body1Semibold'} color={'gray6'}>
            카드 추가 후 다시 확인해주세요.
          </Typography>
        </View>
      )}
    </ScreenContainer>
  );
}

const cardListScreenStyles = StyleSheet.create({
  contentContainer: {
    gap: 20,
  },
  noCardTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    paddingTop: 30,
  },
});
