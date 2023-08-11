import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  GetActivityMember,
  createActivity,
  deleteActivity,
  getActivity,
  getActivityMember,
  getAllActivity,
  getAllActivityDeleted,
  restoreActivity,
  updateActivity,
} from '../actions';
import { RootState } from '../store';
import { ActivityMemberState } from 'src/pages/Admin/Activity/components/ActivityMember';
import { convertData } from 'src/pages/Admin/Activity/utils';

export interface Activity {
  id: number;
  name: string;
  description: string;
  location: string;
  deadline: string;
  times: ActivityTime[];
  event_id?: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface ActivityTime {
  id: number;
  name: string;
  number_require: number;
  start_time: string;
  end_time: string;
}

export interface ActivityState {
  activities: Activity[];
  activity?: Activity;
  deletedActivities: Activity[];
  member: ActivityMemberState[];
  loading: boolean;
}

const initialState: ActivityState = {
  activities: [],
  activity: undefined,
  deletedActivities: [],
  member: [],
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
    builder.addCase(getAllActivity.rejected, (state: ActivityState) => {
      state.loading = false;
    });
    builder.addCase(
      getAllActivity.fulfilled,
      (state: ActivityState, action: PayloadAction<Activity[]>) => {
        state.activities = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(getAllActivityDeleted.pending, (state: ActivityState) => {
      state.loading = true;
    });
    builder.addCase(getAllActivityDeleted.rejected, (state: ActivityState) => {
      state.loading = false;
    });
    builder.addCase(
      getAllActivityDeleted.fulfilled,
      (state: ActivityState, action: PayloadAction<Activity[]>) => {
        state.deletedActivities = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(getActivity.pending, (state: ActivityState) => {
      state.loading = true;
    });
    builder.addCase(getActivity.rejected, (state: ActivityState) => {
      state.loading = false;
    });
    builder.addCase(
      getActivity.fulfilled,
      (state: ActivityState, action: PayloadAction<Activity>) => {
        state.activity = action.payload;
        state.loading = false;
      }
    );

    builder.addCase(createActivity.pending, (state: ActivityState) => {
      state.loading = true;
    });
    builder.addCase(createActivity.rejected, (state: ActivityState) => {
      state.loading = false;
    });
    builder.addCase(
      createActivity.fulfilled,
      (state: ActivityState, action: PayloadAction<Activity>) => {
        state.activities.unshift(action.payload);
        state.loading = false;
      }
    );

    builder.addCase(updateActivity.pending, (state: ActivityState) => {
      state.loading = true;
    });
    builder.addCase(updateActivity.rejected, (state: ActivityState) => {
      state.loading = false;
    });
    builder.addCase(
      updateActivity.fulfilled,
      (state: ActivityState, action: PayloadAction<Activity>) => {
        state.activities = state.activities.map((activity) =>
          activity.id === action.payload.id ? action.payload : activity
        );
        state.loading = false;
      }
    );

    builder.addCase(deleteActivity.pending, (state: ActivityState) => {
      state.loading = true;
    });
    builder.addCase(deleteActivity.rejected, (state: ActivityState) => {
      state.loading = false;
    });
    builder.addCase(
      deleteActivity.fulfilled,
      (state: ActivityState, action: PayloadAction<number>) => {
        state.activities = state.activities.filter(
          (act: Activity) => act.id !== action.payload
        );
        state.loading = false;
      }
    );
    builder.addCase(restoreActivity.pending, (state: ActivityState) => {
      state.loading = true;
    });
    builder.addCase(restoreActivity.rejected, (state: ActivityState) => {
      state.loading = false;
    });
    builder.addCase(
      restoreActivity.fulfilled,
      (state: ActivityState, action: PayloadAction<number>) => {
        state.deletedActivities = state.deletedActivities.filter(
          (act: Activity) => act.id !== action.payload
        );
        state.loading = false;
      }
    );

    builder.addCase(getActivityMember.pending, (state: ActivityState) => {
      state.loading = true;
    });
    builder.addCase(getActivityMember.rejected, (state: ActivityState) => {
      state.loading = false;
    });
    builder.addCase(
      getActivityMember.fulfilled,
      (state: ActivityState, action: PayloadAction<GetActivityMember[]>) => {
        state.member = convertData(action.payload);
        state.loading = false;
      }
    );
  },
});

export const activitySelector = (state: RootState) => state.activity;

export default activitySlice.reducer;
