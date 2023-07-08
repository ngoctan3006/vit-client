import { AxiosResponse } from 'axios';
import { GetActivityMember } from 'src/redux/actions';
import { API } from './axios';

const prefix = 'activity';

export const getActivityMember = (
  id: number
): Promise<AxiosResponse<{ data: GetActivityMember[] }>> =>
  API.get(`${prefix}/member/${id}`);
