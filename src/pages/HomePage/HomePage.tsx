import s from './style.module.scss';
import { useGetWeatherQuery } from '../../store/api/localWeatherApi';
import { useAppSelector } from '../../store/hooks';
import MainCard from '../../components/MainCard/MainCard';
import SubCard from '../../components/SubCard/SubCard';
import Loader from '../../components/Loader/Loader';

export const HomePage = () => {
  const { coords } = useAppSelector((state) => state.weather);
  const { data, isLoading, isError } = useGetWeatherQuery(coords);
  console.log(isLoading);
  return (
    <main className={s.home}>
      {
        isLoading || isError
        ? <Loader />
        : (
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