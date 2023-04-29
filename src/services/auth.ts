import { AxiosResponse } from 'axios';
import { API } from './axios';

export const loginAPI = async (
  username: string,
  password: string
): Promise<AxiosResponse> => {
  const res = await API.post('auth/signin', {
    username,
    password,
  });
  localStorage.setItem('accessToken', res.data.data.accessToken);
  localStorage.setItem('refreshToken', res.data.data.refreshToken);
  return res;
};
