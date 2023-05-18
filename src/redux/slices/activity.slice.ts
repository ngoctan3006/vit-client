import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Activity {
  id: number;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  event_id: number;
}

export interface ActivityState {
  activities: Activity[];
  deleted_activities: Activity[];
  loading: boolean;
}

const initialState: ActivityState = {
  activities: [],
  deleted_activities: [],
  loading: false,
};

export const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const activitySelector = (state: RootState) => state.activity;

export default activitySlice.reducer;
