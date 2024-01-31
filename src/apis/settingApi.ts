import {axiosApi} from 'apis/axios';
import {CardResponseDto} from 'types/dtos/setting';

export const settingApi = {
  getCardList: async (): Promise<CardResponseDto> => {
    const response = await axiosApi.get('/cards');
    return response.data.result.cards;
  },

  removeCard: async (cardId: number) => {
    const response = await axiosApi.delete(`/cards/${cardId}`);
    return response.data;
  },
};
