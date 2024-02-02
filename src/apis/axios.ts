import axios from 'axios';

export const baseURL = 'https://easybud.store/api';

export const axiosApi = axios.create({
  baseURL,
  timeout: 10 * 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
