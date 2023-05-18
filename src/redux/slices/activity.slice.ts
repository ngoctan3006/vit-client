import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getAllActivity, getAllActivityDeleted } from '../actions';
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
  deletedActivities: Activity[];
  loading: boolean;
}

const initialState: ActivityState = {
  activities: [],
  deletedActivities: [],
  loading: false,
};

export const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllActivity.pending, (state: ActivityState) => {
      state.loading = true;
    });
    builder.addCase(
      getAllActivity.fulfilled,
      (state: ActivityState, action: PayloadAction<Activity[]>) => {
        state.loading = false;
        state.activities = action.payload;
      }
    );
    builder.addCase(getAllActivityDeleted.pending, (state: ActivityState) => {
      state.loading = true;
    });
    builder.addCase(
      getAllActivityDeleted.fulfilled,
      (state: ActivityState, action: PayloadAction<Activity[]>) => {
        state.loading = false;
        state.deletedActivities = action.payload;
      }
    );
  },
});

export const activitySelector = (state: RootState) => state.activity;

export default activitySlice.reducer;
