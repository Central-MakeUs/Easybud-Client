import {axiosApi} from 'apis/axiosInstance';
import {AuthResponseDto} from 'types/dtos/auth';

export const authApi = {
  postLoginUser: async (body: {
    type: 'KAKAO' | 'APPLE';
    idToken: string;
  }): Promise<AuthResponseDto> => {
    const response = await axiosApi.post(
      `/auth/social-login?provider=${body.type}`,
      {
        idToken: body.idToken,
      },
    );
    return response.data.result;
  },

  postlLogoutUser: async (body: {refreshToken: string}) => {
    const response = await axiosApi.post('/auth/logout', {
      refreshToken: body.refreshToken,
    });
    return response.data.result;
  },

  postWithdrawalUser: async () => {
    const response = await axiosApi.post('/auth/withdrawal');
    return response.data.result;
  },
};
