import { createAsyncThunk } from '@reduxjs/toolkit';
import { QueryParamType, defaultQueryParam } from '../../constants/type';
import { API } from '../../services/axios';

export const getAllMember = createAsyncThunk(
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
