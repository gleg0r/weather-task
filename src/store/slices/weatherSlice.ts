import { createSlice } from '@reduxjs/toolkit';
import { IWeatherState } from '../../types/weather';

const initialState: IWeatherState = {
  coords: {},
};

const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {
    setedCoords: (state, action) => {
      state.coords = action.payload;
    },
  }
});

export const { setedCoords } = weatherSlice.actions;
export default weatherSlice.reducer;