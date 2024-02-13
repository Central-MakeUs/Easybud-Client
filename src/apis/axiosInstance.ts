import axios, {AxiosError, AxiosResponse} from 'axios';
import localStorage from 'libs/async-storage';
import {TokenKeys} from 'libs/async-storage/constants/keys';
import {includes} from 'lodash';

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
  error => Promise.reject(error),
);

const onFulfilled = (res: AxiosResponse) => {
  return res;
};

const onRejected = async (error: AxiosError) => {
  const originalConfig = error.config;

  const refreshToken = (await localStorage.get(
    TokenKeys.RefreshToken,
  )) as string;

  const statusArray = [4100, 4101, 4102, 4103, 4104];

  if (originalConfig && includes(statusArray, error.response?.status)) {
    try {
      const response = await axiosApi.post('auth/reissue', {refreshToken});
      const {result} = response.data.result;

      localStorage.set(TokenKeys.AccessToken, result.accessToken);
      localStorage.set(TokenKeys.RefreshToken, result.refreshToken);

      originalConfig.headers.Authorization = `Bearer ${result.accessToken}`;

      return axiosApi(originalConfig);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  return Promise.reject(error);
};

axiosApi.interceptors.response.use(onFulfilled, onRejected);
