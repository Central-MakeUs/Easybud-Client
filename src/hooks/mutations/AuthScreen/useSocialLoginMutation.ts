import {useMutation} from '@tanstack/react-query';
import {authApi} from 'apis/authApi';

export default function useSocialLoginMutation() {
  const useAuthMutation = useMutation({
    mutationFn: authApi.postLoginUser,
  });

  return {useAuthMutation};
}
