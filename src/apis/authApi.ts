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

  postLogoutUser: async (body: {refreshToken: string}) => {
    const response = await axiosApi.post('/auth/logout', {
      refreshToken: body.refreshToken,
    });
    return response.data.result;
  },

  deleteUser: async () => {
    const response = await axiosApi.delete('/auth/withdrawal');
    return response.data.result;
  },
};
