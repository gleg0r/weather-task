import { FC } from 'react';
import s from './style.module.scss';
import { IMainCardProps } from '../../types/componentsTypes';
import timeConverter from '../../utils/timeConverter';

const MainCard: FC<IMainCardProps> = ({ temp, time, city }) => {

  return (
    <div className={s.card}>
      <div className={s.card__weather}>
        <h3 className={s.card__temp}>{temp - 273}°</h3>
        <h4 className={s.card__date}>Сегодня</h4>
      </div>
      <div className={s.card__info}>
        <p className={s.card__text}>Время: {timeConverter(time)}</p>
        <p className={s.card__text}>Город: {city}</p>
      </div>
    </div>
  );
};

export default MainCard;