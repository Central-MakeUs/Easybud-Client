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

  const getCardDataDate = (
    startDate: number,
    endDate: number,
    paymentDate: number,
  ) => {
    const formatDateString = (date: number) => {
      if (date === -1) {
        return '말일';
      } else {
        return `${date}일`;
      }
    };

    const startDateString = formatDateString(startDate);
    const endDateString = formatDateString(endDate);
    const paymentDateString = formatDateString(paymentDate);

    return {startDateString, endDateString, paymentDateString};
  };

  return (
    <ScreenContainer
      fixedBottomComponent={
        <Button onPress={handlePressAddCardButton}>카드 추가</Button>
      }
      contentContainerStyle={cardListScreenStyles.contentContainer}>
      {cardListData.length ? (
        cardListData.map(cardData => {
          const formattedDates = getCardDataDate(
            cardData.startDate,
            cardData.endDate,
            cardData.paymentDate,
          );

          return (
            <CardItem
              key={cardData.cardId}
              cardId={cardData.cardId}
              cardName={cardData.name}
              usagePeriod={`${formattedDates.startDateString} ~ ${formattedDates.endDateString}`}
              paymentDate={formattedDates.paymentDateString}
              keyNote={cardData.summary}
            />
          );
        })
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
    paddingTop: 10,
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
