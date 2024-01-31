import {useNavigation} from '@react-navigation/native';
import Button from 'components/@common/Buttons/Button';

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
  const navigation = useNavigation();

  const handlePressSaveButton = () => {
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
