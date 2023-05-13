import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { COMMON } from '../constants';

const baseURL =
  import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_PRODUCTION_BASE_URL
    : import.meta.env.VITE_DEVELOPMENT_BASE_URL;

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const accessToken = localStorage.getItem(COMMON.ACCESS_TOKEN);
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError) => {
  if (error.response && error.response.status === 401) {
    const refreshToken = localStorage.getItem(COMMON.REFRESH_TOKEN);

    try {
      const { data } = await axios.post(`${baseURL}/auth/refresh-token`, {
        refreshToken,
      });
      localStorage.setItem(COMMON.ACCESS_TOKEN, data.data.accessToken);
      error.config.headers['Authorization'] = `Bearer ${data.data.accessToken}`;
      return axios(error.config);
    } catch (err: any) {
      localStorage.removeItem(COMMON.ACCESS_TOKEN);
      localStorage.removeItem(COMMON.REFRESH_TOKEN);
      return Promise.reject(err);
    }
  }
  return Promise.reject(error);
};

const setupInterceptorsTo = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};

export const API: AxiosInstance = setupInterceptorsTo(
  axios.create({ baseURL })
);
