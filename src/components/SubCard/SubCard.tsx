import { FC } from "react";
import s from './style.module.scss';

const SubCard: FC = () => {
  return (
    <ul className={s.card}>
      <li>
        <span>Температура</span> 
      </li>
      <li>
        <span>Давление</span> 
      </li>
      <li>
        <span>Влажность</span> 
      </li>
      <li>
        <span>Скорость ветра</span> 
      </li>
    </ul>
  );
};

export default SubCard;