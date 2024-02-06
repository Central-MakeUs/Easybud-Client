import {axiosApi} from 'apis/axios';
import {set} from 'lodash';

const categoryApi = {
  getCategoryList: async (): Promise<CategoryList | undefined> => {
    const {data} = await axiosApi.get(`/categories`);

    if (!data) {
      return data;
    }

    const parsedData: CategoryList = new Map();

    (data.result.accountCategories as CategoryListDTO).forEach(
      ({
        primaryCategoryId: primaryId,
        primaryCategoryContent: primaryContent,
        secondaryCategoryId: secondaryId,
        secondaryCategoryContent: secondaryContent,
        tertiaryCategoryId: tertiaryId,
        tertiaryCategoryContent: tertiaryContent,
      }) => {
        // primaryId 키로 가지는 PrimaryCategory가 이미 Map에 있는지 확인
        const primary = parsedData.get(primaryId);

        if (!primary) {
          // Map에 PrimaryCategory가 없을 경우 새로운 PrimaryCategory를 생성하여 Map에 추가
          const newPrimary: PrimaryCategory = {
            id: primaryId,
            name: primaryContent,
            subList: new Map(),
          };

          // secondaryId를 키로 가지는 SecondaryCategory를 생성하여 PrimaryCategory에 추가
          const newSecondary: SecondaryCategory = {
            id: secondaryId,
            name: secondaryContent,
            subList: new Map([
              [tertiaryId, {id: tertiaryId, name: tertiaryContent}],
            ]),
          };

          set(newPrimary, ['subList', secondaryId], newSecondary);

          // Map에 새로운 PrimaryCategory를 추가
          parsedData.set(primaryId, newPrimary);
        } else {
          // Map에 이미 존재하는 PrimaryCategory일 경우 secondaryId를 키로 가지는 SecondaryCategory를 확인
          const secondary = primary.subList.get(secondaryId);

          if (!secondary) {
            // SecondaryCategory가 없을 경우 새로운 SecondaryCategory를 생성하여 PrimaryCategory에 추가
            const newSecondary: SecondaryCategory = {
              id: secondaryId,
              name: secondaryContent,
              subList: new Map([
                [tertiaryId, {id: tertiaryId, name: tertiaryContent}],
              ]),
            };

            set(primary, ['subList', secondaryId], newSecondary);
          } else {
            // SecondaryCategory가 이미 존재할 경우 tertiaryId를 키로 가지는 TertiaryCategory를 추가
            set(secondary, ['subList', tertiaryId], {
              id: tertiaryId,
              name: tertiaryContent,
            });
          }
        }
      },
    );
    return parsedData;
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

type TertiaryCategory = {
  id: number;
  name: string;
};

type SecondaryCategory = {
  id: number;
  name: string;
  subList: Map<number, TertiaryCategory>;
};

type PrimaryCategory = {
  id: number;
  name: string;
  subList: Map<number, SecondaryCategory>;
};

type CategoryList = Map<number, PrimaryCategory>;
