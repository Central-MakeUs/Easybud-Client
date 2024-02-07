import {StyleSheet, View} from 'react-native';
import {theme} from 'styles';
import {useCardMutation} from 'hooks/mutations/Setting/useCardMutation';
import Icon from 'components/@common/Icon';
import Typography from 'components/@common/Typography';

/**
 * @param cardId 카드 아이디
 * @param cardName 카드명
 * @param usagePeriod 사용 기간
 * @param paymentDate 결제일
 * @param keyNote 적요
 */
type CardItemProps = {
  cardId: number;
  cardName: string;
  usagePeriod: string;
  paymentDate: string;
  keyNote: string;
};

export default function CardItem({
  cardId,
  cardName,
  usagePeriod,
  paymentDate,
  keyNote,
}: CardItemProps) {
  const {removeCardMutation} = useCardMutation();

  const handlePressRemoveCardIcon = () => {
    removeCardMutation.mutate(cardId);
  };

  return (
    <View style={cardItemStyles.cardContainer}>
      <View style={cardItemStyles.firstRowContainer}>
        <Typography type={'Body2Semibold'} color={'gray6'}>
          {cardName}
        </Typography>
        <Icon name="Bin" size={18} onPress={handlePressRemoveCardIcon} />
      </View>
      <View style={cardItemStyles.secondRowContainer}>
        <Typography type={'Body2Regular'} color={'gray6'}>
          사용 기간
        </Typography>
        <Typography type={'Body2Semibold'} color={'gray6'}>
          {usagePeriod}
        </Typography>
      </View>
      <View style={cardItemStyles.secondRowContainer}>
        <Typography type={'Body2Regular'} color={'gray6'}>
          결제일
        </Typography>
        <Typography type={'Body2Semibold'} color={'gray6'}>
          {paymentDate}
        </Typography>
      </View>
      <View style={cardItemStyles.secondRowContainer}>
        <Typography type={'Body2Regular'} color={'gray6'}>
          적요
        </Typography>
        <Typography type={'Body2Semibold'} color={'gray6'}>
          {keyNote}
        </Typography>
      </View>
    </View>
  );
}

const cardItemStyles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.palette.gray3,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 5,
  },
  firstRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  secondRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    backgroundColor: theme.palette.gray2,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
});
