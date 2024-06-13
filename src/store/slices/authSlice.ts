import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../../types/auth';

const initialState: IAuthState = {
  user: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setedUser: (state, action) => {
      state.user = action.payload;
    },
  }
});

export const { setedUser } = authSlice.actions;
export default authSlice.reducer;