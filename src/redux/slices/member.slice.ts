import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getAllMember } from '../actions/member.action';
import { RootState } from '../store';
import { User } from './auth.slice';

export interface MemberState {
  members: User[];
  loading: boolean;
}

const initialState: MemberState = {
  members: [],
  loading: false,
};

export const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMember.pending, (state: MemberState) => {
      state.loading = true;
    });
    builder.addCase(
      getAllMember.fulfilled,
      (state: MemberState, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.members = action.payload;
      }
    );
  },
});

export const memberSelector = (state: RootState) => state.member;

export default memberSlice.reducer;
