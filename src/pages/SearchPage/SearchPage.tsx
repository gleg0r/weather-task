import s from './style.module.scss';
import { useForm } from 'react-hook-form';
import useDebounce from '../../utils/useDebounce';
import { useEffect, useState } from 'react';
import { useGetWeatherByCityQuery } from '../../store/api/localWeatherApi';
import MainCard from '../../components/MainCard/MainCard';
import SubCard from '../../components/SubCard/SubCard';
import Loader from '../../components/Loader/Loader';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { IFetchError } from '../../types/componentsTypes';
import { useAppSelector } from '../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { setedShowModal } from '../../store/slices/authSlice';

const SearchPage = () => {
  const { 
    register,
    formState: { errors },
  } = useForm({mode: 'onChange'});
  const [city, setCity] = useState<string>('');
  const debouncedCity = useDebounce(city, 500);
  const { data, isLoading, isError, error }  = useGetWeatherByCityQuery(debouncedCity);
  const { user } = useAppSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(!user) {
      dispatch(setedShowModal(true));
      navigate('/');
    } 
  }, [user, navigate, dispatch]);

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
        <p className={s.search__validate}>{errors?.search && `${errors.search.message}`}</p>
      </label>
      {
        
        data && !isLoading ?
        <div className={s.search__result}>
          <MainCard temp={data!.main.temp} time={data!.dt} city={data!.name} />
          <SubCard
            temp={data!.main.temp}
            pressure={data!.main.pressure}
            tempFeelsLike={data!.main.feels_like}
            windSpeed={data!.wind.speed}
            humidity={data!.main.humidity}
          />
        </div>
        : 
          isError ? <p className={s.search__error}>{getErrorMessage(error) !== 'Nothing to geocode' ? getErrorMessage(error): ''}</p> : <Loader />
      }
    </main>
  );
};

export default SearchPage;