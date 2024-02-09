import {useQuery} from '@tanstack/react-query';
import categoryApi from 'apis/categoryApi';
import {AccountCategoryQueryKeys} from 'constants/queryKeys/accountCategory';

export default function useGetCategoryList() {
  const {data, isLoading} = useQuery({
    queryKey: [AccountCategoryQueryKeys.AccountCategoryList],
    queryFn: categoryApi.getCategoryList,
  });

  return {data, isLoading};
}
