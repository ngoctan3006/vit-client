import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginState } from '../../pages/Login';
import { API } from '../../services/axios';
import { message } from 'antd';

export const login = createAsyncThunk(
  'auth/login',
  async (data: LoginState, { rejectWithValue }) => {
    try {
      const {
        data: { data: resData },
      } = await API.post('auth/signin', data);
      localStorage.setItem('accessToken', resData.accessToken);
      localStorage.setItem('refreshToken', resData.refreshToken);
      return resData.user;
    } catch (error: any) {
      console.log(error.response.data);
      message.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);
