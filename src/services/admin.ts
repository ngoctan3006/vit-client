import { AxiosResponse } from 'axios';
import { UpdateUserInfo } from 'src/pages/Admin/Member';
import { API } from './axios';

export const getTopMember = (): Promise<AxiosResponse<any>> =>
  API.get(`activity/top-member`);

export const updateMemberPosition = (
  id: number,
  formData: UpdateUserInfo
): Promise<AxiosResponse<any>> => API.put(`user/update-info/${id}`, formData);
