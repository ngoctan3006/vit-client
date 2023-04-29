import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginState } from '../../pages/LoginPage';
import { API } from '../../services/axios';
import { message } from 'antd';

export const login = createAsyncThunk(
  'auth/login',
  async (data: LoginState, { rejectWithValue }) => {
    try {
      const res = await API.post('auth/signin', data);
      return res.data.data.user;
    } catch (error: any) {
      console.log(error.response.data);
      message.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);
