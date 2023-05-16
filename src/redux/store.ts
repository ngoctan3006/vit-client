import { configureStore } from '@reduxjs/toolkit';
import { authReducer, memberReducer } from './slices';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    member: memberReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
