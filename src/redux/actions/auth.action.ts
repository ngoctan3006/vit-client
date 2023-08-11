import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';
import { LoginState } from 'pages/Auth/Login';
import { API } from 'services/axios';
import { COMMON } from 'src/constants';
import { User } from '../slices/auth.slice';

export interface UpdateUserInfo {
  email?: string;
  phone?: string;
  bio?: string;
  gen?: number;
  birthday?: string;
  hometown?: string;
  address?: string;
  school?: string;
  student_id?: string;
  class?: string;
  cccd?: string;
}

export const getMe = createAsyncThunk<User, void>(
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

export const login = createAsyncThunk<User, LoginState>(
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

export const updateUserInfo = createAsyncThunk<User, UpdateUserInfo>(
  'auth/updateUser',
  async (formData: UpdateUserInfo, { rejectWithValue }) => {
    try {
      const {
        data: { data: res },
      } = await API.put('user/profile', formData);
      message.success('Cập nhật thông tin thành công');
      return res;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
