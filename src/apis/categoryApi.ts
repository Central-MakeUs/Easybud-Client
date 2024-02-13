import {axiosApi} from 'apis/axiosInstance';
import {CategoryListDTO} from 'types/dtos/category';

const categoryApi = {
  getCategoryList: async (): Promise<CategoryListDTO | undefined> => {
    const {data} = await axiosApi.get(`/categories`);

    return data ? data.result.accountCategories : undefined;
  },
  createTertiaryCategory: async (request: {
    secondaryCategoryId: number;
    tertiaryCategoryContent: string;
  }) => {
    const response = await axiosApi.post(`/categories/tertiary`, {
      params: request,
    });
    return response;
  },
};

export default categoryApi;
