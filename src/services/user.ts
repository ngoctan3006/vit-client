import { AxiosResponse } from 'axios';
import { User } from 'redux/slices/auth.slice';
import { API } from './axios';

export interface UserManagement {
  id: number;
  username: string;
  fullname: string;
  avatar: string | null;
  position: string;
}

export const getUser = (id: string): Promise<AxiosResponse<{ data: User }>> =>
  API.get(`user/${id}`);

export const getUserManagement = (): Promise<
  AxiosResponse<{ data: UserManagement[] }>
> => API.get('user/management');
