import {StyleSheet} from 'react-native';
import {theme} from 'styles';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import Button from 'components/@common/Buttons/Button';

export default function AccountDetailsDescriptionScreen() {
  return (
    <ScreenContainer
      fixedBottomComponent={<Button variant="secondary">다음</Button>}
      contentContainerStyle={accountDetailsDescriptionScreenStyles.container}>
      <Typography type={'Title3SemiBold'} color={'white'}>
        차・대변 데이터를 바탕으로
      </Typography>
      <Typography
        type={'Title3SemiBold'}
        color={'white'}
        style={accountDetailsDescriptionScreenStyles.text}>
        입력한 거래를 검토해요
      </Typography>
    </ScreenContainer>
  );
}

const accountDetailsDescriptionScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.primary,
    paddingTop: 30,
  },
  text: {
    lineHeight: 39,
  },
});
