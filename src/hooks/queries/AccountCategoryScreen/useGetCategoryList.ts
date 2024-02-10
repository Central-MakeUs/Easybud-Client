import {useQuery} from '@tanstack/react-query';
import categoryApi from 'apis/categoryApi';
import {AccountCategoryQueryKeys} from 'constants/queryKeys/accountCategory';
import {find} from 'lodash';
import {
  PrimaryCategory,
  SecondaryCategory,
  TertiaryCategory,
} from 'types/components/Transaction';
import {CategoryListDTO} from 'types/dtos/category';

export default function useGetCategoryList() {
  const {data, ...props} = useQuery({
    queryKey: [AccountCategoryQueryKeys.AccountCategoryList],
    queryFn: categoryApi.getCategoryList,
    placeholderData: previousData => previousData,
  });

  return {data: data ? parseData(data) : data, ...props};
}

const parseData = (data: CategoryListDTO): PrimaryCategory[] => {
  const categoryMap: PrimaryCategory[] = [];

  const updatePrimaryCategory = (
    primaryId: number,
    primaryContent: string,
  ): PrimaryCategory => {
    const newPrimary: PrimaryCategory = {
      id: primaryId,
      name: primaryContent,
      subList: [],
    };
    categoryMap.push(newPrimary);
    return newPrimary;
  };

  const updateSecondaryCategory = (
    primary: PrimaryCategory,
    secondaryId: number,
    secondaryContent: string,
  ): SecondaryCategory => {
    const newSecondary: SecondaryCategory = {
      id: secondaryId,
      name: secondaryContent,
      subList: [],
    };
    primary.subList.push(newSecondary);
    return newSecondary;
  };

  const updateTertiaryCategory = (
    secondary: SecondaryCategory,
    tertiaryId: number,
    tertiaryContent: string,
  ): TertiaryCategory => {
    const newTertiary: TertiaryCategory = {
      id: tertiaryId,
      name: tertiaryContent,
    };
    secondary.subList.push(newTertiary);
    return newTertiary;
  };

  data.forEach(
    ({
      primaryCategoryId: primaryId,
      primaryCategoryContent: primaryContent,
      secondaryCategoryId: secondaryId,
      secondaryCategoryContent: secondaryContent,
      tertiaryCategoryId: tertiaryId,
      tertiaryCategoryContent: tertiaryContent,
    }) => {
      let primary = find(categoryMap, {id: primaryId});
      if (!primary) {
        primary = updatePrimaryCategory(primaryId, primaryContent);
      }

      let secondary = find(primary.subList, {id: secondaryId});
      if (!secondary) {
        secondary = updateSecondaryCategory(
          primary,
          secondaryId,
          secondaryContent,
        );
      }
      if (tertiaryId) {
        updateTertiaryCategory(secondary, tertiaryId, tertiaryContent);
      }
    },
  );

  return categoryMap;
};
