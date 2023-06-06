import axios, { AxiosInstance } from 'axios';

export const TokenAxios: AxiosInstance = axios.create({
  headers: {
    Authorization: '',
  },
});
