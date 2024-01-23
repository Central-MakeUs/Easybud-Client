import {useNavigation} from '@react-navigation/native';
import Button from 'components/@common/Buttons/Button';

type CardSettingFixedButtonProps = {
  cardName: string;
  keyNoteText: string;
  startDate: string;
};

export default function CardSettingFixedButton({
  cardName,
  keyNoteText,
  startDate,
}: CardSettingFixedButtonProps) {
  const navigation = useNavigation();

  const handlePressSaveButton = () => {
    navigation.navigate('Setting');
  };

  return (
    <>
      <Button
        disabled={!cardName || !keyNoteText || !startDate}
        onPress={handlePressSaveButton}>
        저장하기
      </Button>
    </>
  );
}
