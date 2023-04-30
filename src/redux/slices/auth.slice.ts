import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { login } from '../actions/auth.action';
import { RootState } from '../store';

export interface User {
  id: number;
  username: string;
  fullname: string;
  email: string;
  phone: string;
  bio?: string;
  avatar?: string;
  birthday?: string;
  howntown?: string;
  address?: string;
  school?: string;
  student_id?: string;
  class?: string;
  cccd?: string;
  date_join?: string;
  date_out?: string;
  last_login?: string;
  gender?: string;
  status?: string;
  position?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state: AuthState) => {
      state.loading = true;
    });
    builder.addCase(
      login.fulfilled,
      (state: AuthState, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      }
    );
    builder.addCase(login.rejected, (state: AuthState) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    });
  },
});

export const authSelector = (state: RootState) => state.auth;

export const { startLoading, endLoading } = authSlice.actions;

export default authSlice.reducer;
