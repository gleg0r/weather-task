import { FC } from 'react'
import s from './style.module.scss'
import logo from '../../assets/images/logo.svg'

const Header: FC = () => {
  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <img src={logo} alt="Logo" />
        <h1 className={s.header__title}>Weather</h1>
      </div>
      <nav>
        <ul>
          <li>Главная</li>
          <li>Другой регион</li>
        </ul>
      </nav>
      <button>Log in</button>
    </header>
  )
}

export default Header