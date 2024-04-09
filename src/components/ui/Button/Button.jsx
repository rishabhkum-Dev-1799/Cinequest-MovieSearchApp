import { twJoin } from 'tailwind-merge';
import Proptypes from "prop-types"

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
Button.propTypes={
  children:Proptypes.node.isRequired,
  onClick:Proptypes.func.isRequired,
  className:Proptypes.string
}
export default Button;
