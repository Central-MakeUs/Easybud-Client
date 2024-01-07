import {TouchableOpacity} from 'react-native';
import {
  useQueryClient,
  useQueryErrorResetBoundary,
} from '@tanstack/react-query';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import useNavigator from 'navigators/hooks/useNavigator';

type FallbackErrorScreenProps = {
  resetError: () => void;
};

export default function FallbackErrorScreen({
  resetError,
}: FallbackErrorScreenProps) {
  const {reset} = useQueryErrorResetBoundary();
  const queryClient = useQueryClient();

  const {stackNavigation} = useNavigator();

  const resetErrorState = () => {
    queryClient.clear();
    reset();
    resetError();
  };

  const handlePressButton = () => {
    resetErrorState();

    stackNavigation.navigate('TabNavigator');
  };

  return (
    <ScreenContainer>
      <Typography>에러 발생</Typography>
      <TouchableOpacity onPress={handlePressButton} />
    </ScreenContainer>
  );
}
