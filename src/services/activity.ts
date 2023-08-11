import { AxiosResponse } from 'axios';
import { GetActivityMember } from 'src/redux/actions';
import { API } from './axios';

const prefix = 'activity';

export interface ConfirmationDto {
  userId: number;
  timeId: number;
}

export interface RegisterActivity {
  activityId: number;
  timeId: number;
}

export const getActivityMember = (
  id: number
): Promise<AxiosResponse<{ data: GetActivityMember[] }>> =>
  API.get(`${prefix}/member/${id}`);

export const approveActivity = (
  data: ConfirmationDto
): Promise<AxiosResponse<any>> => API.post(`${prefix}/approve`, data);

export const rejectActivity = (
  data: ConfirmationDto
): Promise<AxiosResponse<any>> => API.post(`${prefix}/reject`, data);

export const registerActivity = (
  data: RegisterActivity
): Promise<AxiosResponse<any>> => API.post(`${prefix}/register`, data);
