import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  useQueryClient,
  useQueryErrorResetBoundary,
} from '@tanstack/react-query';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';

type FallbackErrorScreenProps = {
  error: Error;
  resetError: () => void;
};

export default function FallbackErrorScreen({
  error,
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
    <ScreenContainer>
      <Typography>문제가 발생했습니다</Typography>
      <Typography>{error.message}</Typography>
      <TouchableOpacity onPress={handlePressButton}>
        홈으로 돌아가기
      </TouchableOpacity>
    </ScreenContainer>
  );
}
