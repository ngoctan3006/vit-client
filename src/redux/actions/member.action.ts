import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'services/axios';
import { QueryParamType, defaultQueryParam } from 'src/constants';
import { User } from '../slices/auth.slice';

export const getAllMember = createAsyncThunk<User[], QueryParamType>(
  'member/getAll',
  async (
    { page, limit }: QueryParamType = defaultQueryParam,
    { rejectWithValue }
  ) => {
    try {
      const {
        data: { data: res },
      } = await API.get(`user/all?page=${page}&limit=${limit}`);
      return res;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
