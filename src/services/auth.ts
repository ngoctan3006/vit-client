import { AxiosResponse } from 'axios';
import { RequestResetPasswordState } from '../pages/Auth/ForgotPassword';
import { API } from './axios';

export const requestResetPasswordAPI = (
  data: RequestResetPasswordState
): Promise<AxiosResponse<{ data: { message: string } }>> =>
  API.post('auth/request-reset-password', data);
