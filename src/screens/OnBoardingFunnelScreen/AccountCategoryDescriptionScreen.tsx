import {StyleSheet} from 'react-native';
import {theme} from 'styles';
import {SetStepActionType} from 'types/screens/FunnelScreen';
import ScreenContainer from 'components/@common/ScreenContainer';
import Button from 'components/@common/Buttons/Button';
import Typography from 'components/@common/Typography';

type AccountCategoryDescriptionScreenProps = SetStepActionType;

export default function AccountCategoryDescriptionScreen({
  onNext,
}: AccountCategoryDescriptionScreenProps) {
  return (
    <ScreenContainer
      fixedBottomComponent={
        <Button variant="secondary" onPress={onNext}>
          다음
        </Button>
      }
      contentContainerStyle={accountCategoryDescriptionScreenStyles.container}>
      <Typography type={'Title3SemiBold'} color={'white'}>
        계정 카테고리를 커스터마이징하여
      </Typography>
      <Typography
        type={'Title3SemiBold'}
        color={'white'}
        style={accountCategoryDescriptionScreenStyles.text}>
        세분화된 계정 정보를 입력해요
      </Typography>
    </ScreenContainer>
  );
}

const accountCategoryDescriptionScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.primary,
    paddingTop: 30,
  },
  text: {
    lineHeight: 39,
  },
});
