import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import s from './style.module.scss';
import Header from '../Header/Header';

const Layout: FC = () => {

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.wrapper__container}>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;