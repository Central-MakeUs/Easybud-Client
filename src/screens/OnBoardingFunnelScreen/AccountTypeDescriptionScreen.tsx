import {StyleSheet} from 'react-native';
import {theme} from 'styles';
import {SetStepActionType} from 'types/screens/FunnelScreen';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import Button from 'components/@common/Buttons/Button';

type AccountTypeDescriptionScreenProps = SetStepActionType;

export default function AccountTypeDescriptionScreen({
  onNext,
}: AccountTypeDescriptionScreenProps) {
  return (
    <ScreenContainer
      fixedBottomComponent={
        <Button variant="secondary" onPress={onNext}>
          다음
        </Button>
      }
      contentContainerStyle={accountTypeDescriptionScreenStyles.container}>
      <Typography type={'Title3SemiBold'} color={'white'}>
        거래의 8요소를 활용하여
      </Typography>
      <Typography
        type={'Title3SemiBold'}
        color={'white'}
        style={accountTypeDescriptionScreenStyles.text}>
        정확한 복식부기 거래를 입력해요
      </Typography>
    </ScreenContainer>
  );
}

const accountTypeDescriptionScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.primary,
    paddingTop: 30,
  },
  text: {
    lineHeight: 39,
  },
});
