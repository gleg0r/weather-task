import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from './slices/authSlice';
import { localWeatherApi } from './api/localWeatherApi';
import weatherSlice from './slices/weatherSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    weather: weatherSlice,
    [localWeatherApi.reducerPath]: localWeatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(localWeatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch);