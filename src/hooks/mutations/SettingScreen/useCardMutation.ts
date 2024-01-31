import {useMutation, useQueryClient} from '@tanstack/react-query';
import {settingApi} from 'apis/settingApi';
import {settingQueryKeys} from 'constants/queryKeys/setting';

export const useCardMutation = () => {
  const queryClient = useQueryClient();

  const removeCardMutation = useMutation({
    mutationFn: settingApi.removeCard,
    onSuccess: () =>
      queryClient.invalidateQueries({queryKey: [settingQueryKeys.cardList]}),
  });

  const addCardMutation = useMutation({
    mutationFn: settingApi.addCard,
    onSuccess: () =>
      queryClient.invalidateQueries({queryKey: [settingQueryKeys.cardList]}),
  });

  return {removeCardMutation, addCardMutation};
};
