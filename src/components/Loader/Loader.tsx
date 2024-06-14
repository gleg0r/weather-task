import { FC } from "react";
import s from './style.module.scss';
import sun from '../../assets/images/sun.svg';

const Loader: FC = () => {
  return (
    <div className={s.loader}>
      <img className={s.loader__img}src={sun} alt="sun" />
    </div>

  );
};

export default Loader;