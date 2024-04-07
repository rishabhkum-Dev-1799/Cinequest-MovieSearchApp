import NavBarDetails from './NavBarDetails';

const Navbar = () => {
  return (
    <nav className='bg-navbar_bg w-full h-full p-4 flex flex-col items-center relative overflow-hidden'>
      <NavBarDetails className="w-full h-full"/>
    </nav>
  );
};

export default Navbar;
