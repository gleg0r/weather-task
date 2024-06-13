import { FC } from 'react';
import s from './style.module.scss';
import logo from '../../assets/images/logo.svg';
import NavBar from '../UI/NavBar/NavBar';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { useAppDispatch } from '../../store/hooks';
import { setedUser } from '../../store/slices/authSlice';

const Header: FC = () => {
  const { user } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  function logOut() {
    dispatch(setedUser(''));
    sessionStorage.removeItem('email');
  }

  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <img src={logo} alt="Logo" />
        <Link to='/'>
          <h1 className={s.header__title}>Weather</h1>
        </Link>
      </div>
      <NavBar />
        {
          !user ? (
            <Link to='/auth'>
              <Button className={s.header__btn}>Log in</Button>
            </Link>
          ) : <Button onClick={logOut} className={s.header__btn}>Log out</Button>
        }
    </header>
  );
};

export default Header;