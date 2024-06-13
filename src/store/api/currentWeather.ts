import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { ICoord, ILocalWeatherData } from "../../types/weatherApi";

export const localWeatherApi = createApi({
  reducerPath: 'localWeatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  endpoints: (builder) => ({
    getWeather: builder.query<ILocalWeatherData, ICoord>({
      query: (coords) => ({
        url: 'weather',
        params: {
          lat: coords.lat,
          lon: coords.lon,
          appid: import.meta.env.VITE_API_KEY
        }
      })
    })
  })
});