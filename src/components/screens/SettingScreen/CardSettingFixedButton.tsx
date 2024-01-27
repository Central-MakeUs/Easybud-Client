import {useRecoilValue} from 'recoil';
import {useNavigation} from '@react-navigation/native';
import {categoryState} from 'libs/recoil/states/category';
import Button from 'components/@common/Buttons/Button';

type CardSettingFixedButtonProps = {
  cardName: string;
  keyNoteText: string;
};

export default function CardSettingFixedButton({
  cardName,
  keyNoteText,
}: CardSettingFixedButtonProps) {
  const selectedCategory = useRecoilValue(categoryState);
  const navigation = useNavigation();

  const handlePressSaveButton = () => {
    navigation.navigate('Setting');
  };

  return (
    <Button
      disabled={!cardName || !keyNoteText || !selectedCategory}
      onPress={handlePressSaveButton}>
      저장하기
    </Button>
  );
}
