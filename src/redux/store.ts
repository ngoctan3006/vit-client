import { configureStore } from '@reduxjs/toolkit';
import { activityReducer, authReducer, memberReducer } from './slices';

export const store = configureStore({
  reducer: {
    activity: activityReducer,
    auth: authReducer,
    member: memberReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
