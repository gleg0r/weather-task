import s from './style.module.scss';
import cn from 'classnames';

interface Props {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: Props) => {
  return (
    <button onClick={onClick} className={cn(s.button, className)}>{children}</button>
  );
};

export default Button;