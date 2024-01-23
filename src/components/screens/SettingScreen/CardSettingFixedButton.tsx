import {View, StyleSheet} from 'react-native';
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
    <View style={cardSettingFixedButtonStyles.fixedBottomContainer}>
      <Button
        disabled={!cardName || !keyNoteText || !startDate}
        onPress={handlePressSaveButton}>
        저장하기
      </Button>
    </View>
  );
}

const cardSettingFixedButtonStyles = StyleSheet.create({
  fixedBottomContainer: {width: '100%', height: 56},
});
