import { AxiosResponse } from 'axios';
import { API } from './axios';

export const getTopMember = (): Promise<AxiosResponse<any>> =>
  API.get(`activity/top-member`);
