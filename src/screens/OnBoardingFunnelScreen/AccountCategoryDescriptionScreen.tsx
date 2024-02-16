import {StyleSheet, View, Image} from 'react-native';
import {theme} from 'styles';
import accountCategoryDescription from 'assets/images/account-category-description.png';
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
        <Button variant="primary" onPress={onNext}>
          다음
        </Button>
      }
      backgroundColor={theme.palette.gray2}
      contentContainerStyle={accountCategoryDescriptionScreenStyles.container}>
      <View style={accountCategoryDescriptionScreenStyles.textContainer}>
        <Typography
          type={'Title3SemiBold'}
          color={'black'}
          style={accountCategoryDescriptionScreenStyles.text}>
          계정 카테고리를 커스터마이징하여
        </Typography>
        <Typography
          type={'Title3SemiBold'}
          color={'black'}
          style={accountCategoryDescriptionScreenStyles.text}>
          세분화된 계정 정보를 입력해요
        </Typography>
      </View>
      <View style={accountCategoryDescriptionScreenStyles.imageContainer}>
        <Image
          source={accountCategoryDescription}
          style={accountCategoryDescriptionScreenStyles.image}
        />
      </View>
    </ScreenContainer>
  );
}

const accountCategoryDescriptionScreenStyles = StyleSheet.create({
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
