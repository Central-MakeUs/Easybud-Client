import {useNavigation} from '@react-navigation/native';
import {useCardMutation} from 'hooks/mutations/SettingScreen/useCardMutation';
import Button from 'components/@common/Buttons/Button';
import {parseDateFromString} from 'utils/parseDateFromString';

/**
 * @param cardName 카드명
 * @param keyNoteText 적요
 * @param cardUsagePeriod 사용 기간
 * @param paymentDate 결제일
 */
type CardSettingFixedButtonProps = {
  cardName: string;
  keyNoteText: string;
  cardUsagePeriod: string;
  paymentDate: string;
};

export default function CardSettingFixedButton({
  cardName,
  keyNoteText,
  cardUsagePeriod,
  paymentDate,
}: CardSettingFixedButtonProps) {
  const {addCardMutation} = useCardMutation();
  const navigation = useNavigation();

  const handlePressSaveButton = () => {
    const [startDate, endDate] = cardUsagePeriod
      .split('~')
      .map(date => date.trim());
    const startDateData = parseDateFromString(startDate);
    const endDateData = parseDateFromString(endDate);
    const paymentDateData = parseDateFromString(paymentDate);

    addCardMutation.mutate({
      startDate: startDateData,
      endDate: endDateData,
      paymentDate: paymentDateData,
      name: cardName,
    });
    navigation.navigate('CardList');
  };

  return (
    <Button
      disabled={!cardName || !keyNoteText || !cardUsagePeriod || !paymentDate}
      onPress={handlePressSaveButton}>
      저장
    </Button>
  );
}
