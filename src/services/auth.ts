import { AxiosResponse } from 'axios';
import { RequestResetPasswordState } from '../pages/Auth/ForgotPassword';
import { API } from './axios';
import { ResetPasswordState } from '../pages/Auth/ResetPassword';

export const requestResetPasswordAPI = (
  data: RequestResetPasswordState
): Promise<AxiosResponse<{ data: { message: string } }>> =>
  API.post('auth/request-reset-password', data);

export const resetPasswordAPI = (
  data: ResetPasswordState
): Promise<AxiosResponse<{ data: { message: string } }>> =>
  API.post('auth/reset-password', data);

export const checkTokenAPI = (
  token: string
): Promise<AxiosResponse<{ data: true }>> => API.post('auth/token', { token });
