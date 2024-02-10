import {useMutation, useQueryClient} from '@tanstack/react-query';
import categoryApi from 'apis/categoryApi';
import {AccountCategoryQueryKeys} from 'constants/queryKeys/accountCategory';

export default function useCreateTertiaryCategory() {
  const queryClient = useQueryClient();

  const {mutate: createTertiaryCategory, ...props} = useMutation({
    mutationFn: categoryApi.createTertiaryCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [[AccountCategoryQueryKeys.AccountCategoryList]],
      });
    },
  });

  return {
    createTertiaryCategory,
    ...props,
  };
}
