import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../../types/auth';

const initialState: IAuthState = {
  user: '',
  showModal: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setedUser: (state, action) => {
      state.user = action.payload;
    },
    setedShowModal: (state, action) => {
      state.showModal = action.payload;
    }
  }
});

export const { setedUser, setedShowModal } = authSlice.actions;
export default authSlice.reducer;