import { AxiosResponse } from 'axios';
import { User } from 'redux/slices/auth.slice';
import { API } from './axios';

export const getUser = (id: string): Promise<AxiosResponse<{ data: User }>> =>
  API.get(`user/${id}`);
