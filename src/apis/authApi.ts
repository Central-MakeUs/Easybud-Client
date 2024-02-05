import {axiosApi} from 'apis/axios';
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

  patchAccessToken: async (body: {
    refreshToken: string;
  }): Promise<AuthResponseDto> => {
    const response = await axiosApi.patch('auth/reissue/', body.refreshToken);
    return response.data.result;
  },
};
