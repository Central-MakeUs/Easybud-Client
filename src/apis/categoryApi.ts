import {axiosApi} from 'apis/axiosInstance';
import axios from 'axios';
import {CategoryListDTO} from 'types/dtos/category';

const categoryApi = {
  getCategoryList: async (): Promise<CategoryListDTO | undefined> => {
    const {data} = await axiosApi.get(`/categories`);

    return data ? data.result.accountCategories : undefined;
  },
  createTertiaryCategory: async (request: {
    secondaryCategory: string;
    tertiaryCategory: string;
  }) => {
    return (await axios.post(`/categories/tertiary`, request)).data;
  },
};

export default categoryApi;
