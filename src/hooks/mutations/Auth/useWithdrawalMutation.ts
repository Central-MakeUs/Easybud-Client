import {useMutation} from '@tanstack/react-query';
import {authApi} from 'apis/authApi';
import useInitialData from 'hooks/useInitialData';
import localStorage from 'libs/async-storage';

export const useWithdrawalMutation = () => {
  const {setAuthData} = useInitialData();

  const withdrawalMutation = useMutation({
    mutationFn: authApi.deleteUser,
    onSuccess: () => {
      setAuthData({isAuthenticated: false});
      localStorage.clearAll();
    },
  });

  return {withdrawalMutation};
};
