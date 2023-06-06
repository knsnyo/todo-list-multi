import axios, { AxiosInstance } from 'axios';
import {
  getAllTokens,
  setAccessToken,
  setRefreshToken,
} from '../storage/key-chain';

export const TokenAxios = async (): Promise<AxiosInstance> => {
  const instance = axios.create();

  const { accessToken, refreshToken } = await getAllTokens();

  instance.interceptors.request.use(
    async (config) => {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    },
    (error: unknown) => Promise.reject(error),
  );

  instance.defaults.headers['Set-Cookie'] = `refresh_token=${refreshToken}`;

  instance.interceptors.response.use(async (response) => {
    const { accessToken, refreshToken, ...others } = response.data;
    if (accessToken) {
      await setAccessToken(accessToken);
    }
    if (refreshToken) {
      await setRefreshToken(refreshToken);
    }
    return others;
  });

  return instance;
};
