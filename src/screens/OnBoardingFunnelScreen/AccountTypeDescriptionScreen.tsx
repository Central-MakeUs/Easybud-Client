import {Image, StyleSheet, View} from 'react-native';
import {theme} from 'styles';
import accountTypeDescription from 'assets/images/account-type-description.png';
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
        <Button variant="primary" onPress={onNext}>
          다음
        </Button>
      }
      contentContainerStyle={accountTypeDescriptionScreenStyles.container}>
      <View style={accountTypeDescriptionScreenStyles.textContainer}>
        <Typography
          type={'Title3SemiBold'}
          color={'black'}
          style={accountTypeDescriptionScreenStyles.text}>
          거래의 8요소를 활용하여
        </Typography>
        <Typography
          type={'Title3SemiBold'}
          color={'black'}
          style={accountTypeDescriptionScreenStyles.text}>
          정확한 복식부기 거래를 입력해요
        </Typography>
      </View>
      <View style={accountTypeDescriptionScreenStyles.imageContainer}>
        <Image
          source={accountTypeDescription}
          style={accountTypeDescriptionScreenStyles.image}
        />
      </View>
    </ScreenContainer>
  );
}

const accountTypeDescriptionScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.gray2,
    paddingTop: 30,
    paddingHorizontal: 0,
    gap: 10,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  text: {
    lineHeight: 35,
  },
  imageContainer: {
    flex: 1,
    marginBottom: 80,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
