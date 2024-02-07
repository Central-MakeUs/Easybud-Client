import {axiosApi} from 'apis/axiosInstance';
import {find} from 'lodash';
import {
  CategoryList,
  PrimaryCategory,
  SecondaryCategory,
  TertiaryCategory,
} from 'types/components/Transaction';

const categoryApi = {
  getCategoryList: async (): Promise<CategoryList | undefined> => {
    const {data} = await axiosApi.get(`/categories`);

    return data ? parseCategoryData(data.result.accountCategories) : data;
  },
};

export default categoryApi;

type CategoryListDTO = {
  primaryCategoryId: number;
  primaryCategoryContent: string;
  secondaryCategoryId: number;
  secondaryCategoryContent: string;
  tertiaryCategoryId: number;
  tertiaryCategoryContent: string;
  isDefault: boolean;
}[];

const parseCategoryData = (data: CategoryListDTO): PrimaryCategory[] => {
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

      updateTertiaryCategory(secondary, tertiaryId, tertiaryContent);
    },
  );

  return categoryMap;
};
