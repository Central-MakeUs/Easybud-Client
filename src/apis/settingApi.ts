import {axiosApi} from 'apis/axios';
import {CardResponseDto} from 'types/dtos/setting';
import {CardEntity} from 'types/entities/setting';

export const settingApi = {
  getCardList: async (): Promise<CardResponseDto> => {
    const response = await axiosApi.get('/cards');
    return response.data.result.cards;
  },

  removeCard: async (cardId: number) => {
    const response = await axiosApi.delete(`/cards/${cardId}`);
    return response.data;
  },

  addCard: async (cardData: Omit<CardEntity, 'cardId'>) => {
    const response = await axiosApi.post('/cards', {
      startDate: cardData.startDate,
      endDate: cardData.endDate,
      paymentDate: cardData.paymentDate,
      name: cardData.name,
    });
    return response.data;
  },
};
