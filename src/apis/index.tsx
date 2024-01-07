import axios from 'axios';

const baseURL = '';

export const axiosApi = axios.create({
  baseURL,
  timeout: 10000,
  headers: {},
});
