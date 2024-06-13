import s from './style.module.scss';
import { FieldValues, useForm } from 'react-hook-form';
import { setedUser } from '../../store/slices/authSlice';
import { useAppDispatch } from '../../store/hooks';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { 
    register,
    formState: { errors, isValid },
    reset,
    handleSubmit,
  } = useForm({mode: 'onBlur'});
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const regExpEmail = /^\S+@\S+\.\S+$/;

  function submitForm(data: FieldValues) {
    dispatch(setedUser(data.email));
    reset();
    sessionStorage.setItem('email', data.email);
    navigate('/');
  }

  return (
    <main className={s.auth}>
      <h2 className={s.auth__title}>Log in</h2>
      <form className={s.auth__form} onSubmit={handleSubmit(submitForm)}>
        <label className={s.auth__label}>
          Email:
          <input className={s.auth__input} type='email' {...register('email', {
            required: 'Поле обязательно для заполнения!',
            pattern: {
              value: regExpEmail,
              message: 'Ошибка при заполнении!'
            },
          })} />
          <p className={s.auth__error}>{ errors?.email && `${ errors?.email.message }` }</p>
        </label>
        <label className={s.auth__label}>
          Password:
          <input className={s.auth__input} type='password' {...register('password', {
            required: 'Поле обязательно для заполнения!',
            minLength: {
              value: 8,
              message: 'Минимум 8 символов!'
            },
            maxLength: {
              value: 20,
              message: 'Максимум 20 символов!',
            },
          })} />

          <p className={s.auth__error}>{ errors?.password && `${ errors?.password.message }` }</p>
        </label>
        <input className={s.auth__submit} type="submit" disabled={!isValid} />
      </form>
    </main>
  );
};

export default LoginPage;