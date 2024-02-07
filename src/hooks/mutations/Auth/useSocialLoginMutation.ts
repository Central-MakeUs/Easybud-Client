import {useMutation} from '@tanstack/react-query';
import {authApi} from 'apis/authApi';

export default function useSocialLoginMutation() {
  const authMutation = useMutation({
    mutationFn: authApi.postLoginUser,
  });

  return {authMutation};
}
