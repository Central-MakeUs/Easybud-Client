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
    const accessToken = await localStorage.get(TokenKeys.AccessToken);

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

  const value = await localStorage.get(TokenKeys.RefreshToken);
  const refreshToken = value as string;

  if (originalConfig && error.response?.status === 4101) {
    try {
      const response = await axiosApi.patch('auth/reissue', {
        refreshToken,
      });
      const result = response.data.result;

      localStorage.set(TokenKeys.AccessToken, result.accessToken);
      localStorage.set(TokenKeys.RefreshToken, result.refreshToken);

      originalConfig.headers.Authorization = `Bearer ${result.accessToken}`;

      return axiosApi(originalConfig);
    } catch (e) {
      return Promise.reject(e);
    }
  }
};

axiosApi.interceptors.response.use(onFulfilled, onRejected);
