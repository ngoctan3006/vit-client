import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';
import { LoginState } from 'pages/Auth/Login';
import { API } from 'services/axios';
import { COMMON } from 'src/constants';

export const getMe = createAsyncThunk(
  'auth/getMe',
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { data: res },
      } = await API.get('auth/me');
      return res;
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
        data: { data: res },
      } = await API.post('auth/signin', data);
      localStorage.setItem(COMMON.ACCESS_TOKEN, res.accessToken);
      localStorage.setItem(COMMON.REFRESH_TOKEN, res.refreshToken);
      return res.user;
    } catch (error: any) {
      message.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);
