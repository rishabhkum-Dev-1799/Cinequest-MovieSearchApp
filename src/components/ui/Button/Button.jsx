import { twJoin, twMerge } from 'tailwind-merge';

const Button = ({ children, onClick, className, ...props }) => {
    const onClickHandler=(e)=>{
        onClick(e);
    }
  return (
    <button
      className={twJoin(
        'rounded-full bg-navbar_bg flex items-center justify-center overflow-hidden',
        className
      )}
      onClick={onClickHandler}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
