import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'components/@common/Icon';
import Typography from 'components/@common/Typography';
import {useState} from 'react';

export default function KeyNote() {
  const [keyNoteText, setKeyNoteText] = useState('');

  return (
    <View style={keyNoteStyles.container}>
      <Typography type={'Body1Semibold'} color={'gray4'}>
        적요
      </Typography>
      <TouchableOpacity onPress={() => {}} style={keyNoteStyles.rightCol}>
        <Typography
          type={'Body1Semibold'}
          color={'gray5'}
          style={keyNoteStyles.text}>
          {keyNoteText}
        </Typography>
        <Icon name={'ArrowRightSmall'} fill={'gray4'} />
      </TouchableOpacity>
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
    borderWidth: 1,
    borderColor: 'black',
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
    borderWidth: 1,
    borderColor: 'red',
    width: 240,
  },
  text: {
    borderWidth: 1,
    borderColor: 'blue',
    flex: 1,
  },
});
