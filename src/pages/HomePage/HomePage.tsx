import s from './style.module.scss';
import { useGetWeatherQuery } from '../../store/api/localWeatherApi';
import { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import MainCard from '../../components/MainCard/MainCard';
import SubCard from '../../components/SubCard/SubCard';

export const HomePage = () => {
  const { coords } = useAppSelector((state) => state.weather);
  const { data, isLoading } = useGetWeatherQuery(coords);

  useEffect(() => {

    console.log(data);
  }, [data]);



  return (
    <main className={s.home}>
      {
        isLoading 
        ? <h1>Loading...</h1> 
        : (
          <>
            <MainCard temp={data!.main.temp} time={data!.dt} city={data!.name} />
            <SubCard />
          </>
        ) 
      }
      
    </main>
  );
};