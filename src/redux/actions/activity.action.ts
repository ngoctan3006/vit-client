import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';
import { API } from '../../services/axios';
import { Activity } from '../slices/activity.slice';
import { QueryParamType, defaultQueryParam } from './../../constants/type';

export interface CreateActivityProps {
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  event_id?: number;
}

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
      message.error(error.response.data.message);
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
      message.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const createActivity = createAsyncThunk<Activity, CreateActivityProps>(
  'activity/create',
  async (data: CreateActivityProps, { rejectWithValue }) => {
    try {
      const {
        data: { data: res },
      } = await API.post('activity', data);
      message.success('Tạo hoạt động mới thành công');
      return res;
    } catch (error: any) {
      message.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);
