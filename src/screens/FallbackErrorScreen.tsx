import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  useQueryClient,
  useQueryErrorResetBoundary,
} from '@tanstack/react-query';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import Icon from 'components/@common/Icon';
import {theme} from 'styles';

type FallbackErrorScreenProps = {
  resetError: () => void;
};

export default function FallbackErrorScreen({
  resetError,
}: FallbackErrorScreenProps) {
  const queryClient = useQueryClient();
  const {reset} = useQueryErrorResetBoundary();
  const navigation = useNavigation();

  const resetErrorState = () => {
    queryClient.clear();
    reset();
    resetError();
  };

  const handlePressButton = () => {
    resetErrorState();
    navigation.navigate('Tab');
  };

  return (
    <ScreenContainer
      contentContainerStyle={fallbackErrorScreenStyles.contentContainer}>
      <Icon name={'ExclamationCircle'} fill={'red'} size={100} />
      <View style={fallbackErrorScreenStyles.bottomElementContainer}>
        <Typography type={'Title1Semibold1'} color={'gray5'}>
          문제가 발생했습니다!
        </Typography>
        <TouchableOpacity
          onPress={handlePressButton}
          style={fallbackErrorScreenStyles.button}>
          <Typography type={'Body1Regular'} color={'white'}>
            홈으로 돌아가기
          </Typography>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}

const fallbackErrorScreenStyles = StyleSheet.create({
  contentContainer: {
    backgroundColor: theme.palette.gray2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },
  bottomElementContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: theme.palette.gray4,
    borderRadius: 15,
  },
});
