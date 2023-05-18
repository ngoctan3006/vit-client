import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../services/axios';
import { Activity } from '../slices/activity.slice';
import { QueryParamType, defaultQueryParam } from './../../constants/type';

export const getAllActivity = createAsyncThunk<Activity[], QueryParamType>(
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

export const getAllActivityDeleted = createAsyncThunk<
  Activity[],
  QueryParamType
>(
  'activity/getAllDeleted',
  async (
    { page, limit }: QueryParamType = defaultQueryParam,
    { rejectWithValue }
  ) => {
    try {
      const {
        data: { data: res },
      } = await API.get(`activity/trash?page=${page}&limit=${limit}`);
      return res;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
