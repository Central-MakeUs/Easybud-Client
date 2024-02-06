import axios, {AxiosError, AxiosResponse} from 'axios';
import localStorage from 'libs/async-storage';
import {TokenKeys} from 'libs/async-storage/constants/keys';

export const baseURL = 'https://easybud.store/api';

export const axiosApi = axios.create({
  baseURL,
  timeout: 10 * 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosApi.interceptors.request.use(
  async config => {
    const accessToken: string = await localStorage.get(TokenKeys.AccessToken);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

const onFulfilled = (res: AxiosResponse) => {
  return res;
};

const onRejected = async (error: AxiosError) => {
  const originalConfig = error.config;

  try {
    const value = await localStorage.get(TokenKeys.RefreshToken);
    const refreshToken = value as string;

    // TODO 서버에서 보내주는 응답 코드에 따라 변경 필요
    if (
      (originalConfig && error.response?.status === 401) ||
      error.response?.status === 500
    ) {
      const response = await axiosApi.patch('auth/reissue', {
        refreshToken,
      });
      const result = response.data.result;

      axiosApi.request({
        ...originalConfig,
        headers: {
          Authorization: `Bearer ${result.accessToken}`,
        },
      });

      localStorage.set('accessToken', result.accessToken);
      localStorage.set('refreshToken', result.refreshToken);

      throw new Error('Access token refreshed. Retry the original request.');
    }
  } catch (e) {
    throw new Error(
      'Error occurred during token refresh. Retry the original request.',
    );
  }
};

axiosApi.interceptors.response.use(onFulfilled, onRejected);
