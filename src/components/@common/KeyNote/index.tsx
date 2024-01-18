import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {sliceString} from 'utils/sliceString';
import {theme} from 'styles';
import Icon from 'components/@common/Icon';
import Typography from 'components/@common/Typography';
import KeyNoteBottomSheet from 'components/@common/KeyNote/KeyNoteBottomSheet';
import {KeyOfPalette} from 'styles/types';

export default function KeyNote() {
  const [keyNoteText, setKeyNoteText] = useState('');
  const [keyNoteInputText, setKeyNoteInputText] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handlePressRightCol = () => setIsBottomSheetOpen(true);

  const {color, text}: {color: KeyOfPalette; text: string} = {
    color: keyNoteText === '' ? 'gray3' : 'gray5',
    text: keyNoteText === '' ? '입력하세요' : sliceString(keyNoteText, 16),
  };

  return (
    <View style={keyNoteStyles.container}>
      <Typography type={'Body1Semibold'} color={'gray4'}>
        적요
      </Typography>
      <TouchableOpacity
        onPress={handlePressRightCol}
        style={keyNoteStyles.rightCol}>
        <Typography
          type={'Body1Semibold'}
          color={color}
          style={keyNoteStyles.text}>
          {text}
        </Typography>
        <Icon name={'ArrowRightSmall'} fill={'gray4'} />
      </TouchableOpacity>
      <KeyNoteBottomSheet
        isBottomSheetOpen={isBottomSheetOpen}
        setIsBottomSheetOpen={setIsBottomSheetOpen}
        keyNoteInputText={keyNoteInputText}
        setKeyNoteText={setKeyNoteText}
        setKeyNoteInputText={setKeyNoteInputText}
      />
    </View>
  );
}

const keyNoteStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 68,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.palette.gray2,
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
    flex: 1,
    marginLeft: 50,
  },
  text: {
    flex: 1,
  },
});
