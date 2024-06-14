import { FC } from "react";
import s from './style.module.scss';
import { ISubCardProps } from "../../types/componentsTypes";
import pressureConverter from "../../utils/pressureConverter";
import tempConverter from "../../utils/tempConverter";

const SubCard: FC<ISubCardProps> = ({ temp, tempFeelsLike, windSpeed, pressure, humidity }) => {
  return (
    <ul className={s.card}>
      <li className={s.card__item}>
        <span>Температура:</span> {tempConverter(temp)}° - ощущается, как {tempConverter(tempFeelsLike)}°
      </li>
      <li className={s.card__item}>
        <span>Давление</span> {pressureConverter(pressure)} мм. рт. ст.
      </li>
      <li className={s.card__item}>
        <span>Влажность: </span> {humidity}% 
      </li>
      <li className={s.card__item}>
        <span>Скорость ветра: </span> {windSpeed} м/с
      </li>
    </ul>
  );
};

export default SubCard;