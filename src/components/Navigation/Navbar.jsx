import { useNavigate } from 'react-router-dom';
import NavBarDetails from './NavBarDetails';


const Navbar = () => {
  const navigate=useNavigate();
  const onNavigationHandler = (href) => {
    navigate(href);
  }
  return (
    <nav className='bg-navbar_bg w-full h-full p-4 flex flex-col items-center relative overflow-hidden'>
      <NavBarDetails className="w-full h-full" onNavigation={onNavigationHandler}/>
    </nav>
  );
};

export default Navbar;
