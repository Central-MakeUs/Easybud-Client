import {useMutation} from '@tanstack/react-query';
import {settingApi} from 'apis/settingApi';

export const useCardMutation = () => {
  const removeCardMutation = useMutation({mutationFn: settingApi.removeCard});

  const addCardMutation = useMutation({mutationFn: settingApi.addCard});

  return {removeCardMutation, addCardMutation};
};
