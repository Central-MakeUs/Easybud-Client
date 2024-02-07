import {useMutation} from '@tanstack/react-query';
import {authApi} from 'apis/authApi';
import useInitialData from 'hooks/useInitialData';
import localStorage from 'libs/async-storage';

export const useLogoutMutation = () => {
  const {setAuthData} = useInitialData();

  const logoutMutation = useMutation({
    mutationFn: authApi.postlLogoutUser,
    onSuccess: () => {
      setAuthData({isAuthenticated: false});
      localStorage.clearAll();
    },
  });

  return {logoutMutation};
};
