import { API } from '../../services/axios';
import { QueryParamType, defaultQueryParam } from './../../constants/type';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllActivity = createAsyncThunk(
  'activity/getAll',
  async (
    { page, limit }: QueryParamType = defaultQueryParam,
    { rejectWithValue }
  ) => {
    try {
      const {
        data: { data: res },
      } = await API.get(`activity?page=${page}&limit=${limit}`);
      return res;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
