import s from './style.module.scss';
import { useForm } from 'react-hook-form';
import useDebounce from '../../utils/useDebounce';
import { useState } from 'react';
import { useGetWeatherByCityQuery } from '../../store/api/localWeatherApi';
import MainCard from '../../components/MainCard/MainCard';
import SubCard from '../../components/SubCard/SubCard';
import Loader from '../../components/Loader/Loader';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { IFetchError } from '../../types/componentsTypes';

const SearchPage = () => {
  const { 
    register,
    formState: { errors },
  } = useForm({mode: 'onChange'});
  const [city, setCity] = useState<string>('');
  const debouncedCity = useDebounce(city, 500);
  const { data, isLoading, isError, error }  = useGetWeatherByCityQuery(debouncedCity);

  const getErrorMessage = (error: FetchBaseQueryError | SerializedError): string => {
    if ('data' in error) {
      const fetchError = error as IFetchError;
      return fetchError.data ? fetchError.data.message : 'Unknown error';
    } else {
      return 'Unknown error';
    }
  };

  return(
    <main className={s.search}>
      <label className={s.search__label}>
        <input className={s.search__input} type="text" {...register('search', {
          value: city,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value),
          required: 'Поле обязательно для заполнения!',
        })}/>
        { errors.search && `${errors.search.message }`}
      </label>
      {
        isLoading 
        ? <Loader />
        : 
          isError ? <p>{getErrorMessage(error)}</p> : (

          <>
            <MainCard temp={data!.main.temp} time={data!.dt} city={data!.name} />
            <SubCard
              temp={data!.main.temp}
              pressure={data!.main.pressure}
              tempFeelsLike={data!.main.feels_like}
              windSpeed={data!.wind.speed}
              humidity={data!.main.humidity}
            />
          </>
        ) 
      }
    </main>
  );
};

export default SearchPage;