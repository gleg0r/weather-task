import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../../types/auth';

const initialState: AuthState = {
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