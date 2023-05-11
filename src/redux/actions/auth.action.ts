import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';
import { CONSTANTS } from '../../constants';
import { LoginState } from '../../pages/Auth/Login';
import { API } from '../../services/axios';

export const getMe = createAsyncThunk(
  'auth/getMe',
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { data: resData },
      } = await API.get('auth/me');
      return resData;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data: LoginState, { rejectWithValue }) => {
    try {
      const {
        data: { data: resData },
      } = await API.post('auth/signin', data);
      localStorage.setItem(CONSTANTS.ACCESS_TOKEN, resData.accessToken);
      localStorage.setItem(CONSTANTS.REFRESH_TOKEN, resData.refreshToken);
      return resData.user;
    } catch (error: any) {
      message.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);
