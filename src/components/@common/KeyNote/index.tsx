import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {sliceString} from 'utils/sliceString';
import {theme} from 'styles';
import Icon from 'components/@common/Icon';
import Typography from 'components/@common/Typography';
import BottomSheet from 'components/@common/BottomSheet';
import TextArea from 'components/@common/KeyNote/TextArea';
import Button from 'components/@common/Buttons/Button';

export default function KeyNote() {
  const [keyNoteText, setKeyNoteText] = useState('');
  const [keyNoteInputText, setKeyNoteInputText] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  return (
    <View style={keyNoteStyles.container}>
      <Typography type={'Body1Semibold'} color={'gray4'}>
        적요
      </Typography>
      <TouchableOpacity
        onPress={() => setIsBottomSheetOpen(true)}
        style={keyNoteStyles.rightCol}>
        <Typography
          type={'Body1Semibold'}
          color={keyNoteText === '' ? 'gray3' : 'gray5'}
          style={keyNoteStyles.text}>
          {keyNoteText === '' ? '입력하세요' : sliceString(keyNoteText, 16)}
        </Typography>
        <Icon name={'ArrowRightSmall'} fill={'gray4'} />
      </TouchableOpacity>
      <BottomSheet
        isBottomSheetOpen={isBottomSheetOpen}
        setIsBottomSheetOpen={setIsBottomSheetOpen}
        children={
          <View style={keyNoteStyles.bottomSheetContainer}>
            <TextArea setText={setKeyNoteInputText} />
            <Button
              children={'작성 완료하기'}
              onPress={() => {
                keyNoteInputText.length && setKeyNoteText(keyNoteInputText);
                setIsBottomSheetOpen(false);
              }}
            />
          </View>
        }
        height={160}
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
  bottomSheetContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
});
