import { AxiosResponse } from 'axios';
import { FirstLogin } from 'pages/Auth/FirstLogin';
import { RequestResetPasswordState } from 'pages/Auth/ForgotPassword';
import { ResetPasswordState } from 'pages/Auth/ResetPassword';
import { API } from './axios';

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

export const firstLogin = (data: FirstLogin): Promise<AxiosResponse<any>> =>
  API.put('/auth/first-login', data);
