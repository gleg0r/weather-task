import { FC } from 'react';
import s from './style.module.scss';
import { Link } from 'react-router-dom';

const NavBar: FC = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li>
          <Link className={s.nav__link} to='/'>Главная</Link>
        </li>
        <li>
          <Link className={s.nav__link} to='/search'>Поиск</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;