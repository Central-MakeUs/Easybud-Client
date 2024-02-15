import {Image, StyleSheet, View} from 'react-native';
import {theme} from 'styles';
import accountDetailsDescription from 'assets/images/account-details-description.png';
import {SetStepActionType} from 'types/screens/FunnelScreen';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import Button from 'components/@common/Buttons/Button';

type AccountDetailsDescriptionScreenProps = SetStepActionType;

export default function AccountDetailsDescriptionScreen({
  onNext,
}: AccountDetailsDescriptionScreenProps) {
  return (
    <ScreenContainer
      fixedBottomComponent={
        <Button variant="primary" onPress={onNext}>
          다음
        </Button>
      }
      backgroundColor={theme.palette.gray2}
      contentContainerStyle={accountDetailsDescriptionScreenStyles.container}>
      <View style={accountDetailsDescriptionScreenStyles.textContainer}>
        <Typography
          type={'Title3SemiBold'}
          color={'black'}
          style={accountDetailsDescriptionScreenStyles.text}>
          차・대변 데이터를 바탕으로
        </Typography>
        <Typography
          type={'Title3SemiBold'}
          color={'black'}
          style={accountDetailsDescriptionScreenStyles.text}>
          입력한 거래를 검토해요
        </Typography>
      </View>
      <View style={accountDetailsDescriptionScreenStyles.imageContainer}>
        <Image
          source={accountDetailsDescription}
          style={accountDetailsDescriptionScreenStyles.image}
        />
      </View>
    </ScreenContainer>
  );
}

const accountDetailsDescriptionScreenStyles = StyleSheet.create({
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
