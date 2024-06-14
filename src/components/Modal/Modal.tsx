import { FC } from 'react';
import { createPortal } from 'react-dom';
import s from './style.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setedShowModal } from '../../store/slices/authSlice';
import Button from '../UI/Button/Button';

const Modal: FC = () => {
  const { showModal } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  function onClose() {
    dispatch(setedShowModal(false));
  }

  return(
    createPortal(
      showModal &&
      <div className={s.modal}>
        <div className={s.modal__content}>
          <p className={s.modal__text}>Авторизуйтесь, чтобы пользоваться поиском!</p>
          <Button className={s.modal__btn} onClick={onClose}>Close</Button>
        </div>
      </div>,
      document.getElementById('root')!
    )
  );
};

export default Modal;