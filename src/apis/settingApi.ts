import {axiosApi} from 'apis/axiosInstance';
import {CardResponseDto} from 'types/dtos/setting';
import {CardEntity} from 'types/entities/setting';

export const settingApi = {
  getCardList: async (): Promise<CardResponseDto> => {
    const {data} = await axiosApi.get('/cards');
    return data.result.cards;
  },

  removeCard: async (cardId: number) => {
    return (await axiosApi.delete(`/cards/${cardId}`)).data;
  },

  addCard: async (cardData: Omit<CardEntity, 'cardId'>) => {
    return (await axiosApi.post('/cards', cardData)).data;
  },
};
