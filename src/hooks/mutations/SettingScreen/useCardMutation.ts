import {useMutation} from '@tanstack/react-query';
import {settingApi} from 'apis/settingApi';

export const useCardMutation = () => {
  const removeCardMutation = useMutation({mutationFn: settingApi.removeCard});

  return {removeCardMutation};
};
