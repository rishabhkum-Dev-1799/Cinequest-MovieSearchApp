import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useActions } from 'src/hooks/useActions';
/**  custom imports */
import { H2heading } from 'src/components/ui';
import { en_titles } from 'src/lang';
import CineQuestLogo from 'src/assets/Images/cinequest_logo.png';
import { navigationLinks } from 'src/data';
import { cineFadeIn } from 'src/utils/motion';
const NavBarDetails = ({ onNavigation }) => {
  const {isLoggedIn}=useSelector(state=>state.authentication)
  const {logoutAction}=useActions()
  const sessionHandler=()=>{
    if(isLoggedIn){
      logoutAction();
      onNavigation("/")
    }else{
      onNavigation("/login")
    }
    
  }
  return (
    <>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-[80px] overflow-hidden'>
          <img
            src={CineQuestLogo}
            alt='CineQuest'
            className='w-[full] object-contain'
          />
        </div>
        <H2heading className={'font-bold uppercase leading-5 text-bg-gradient'}>
          {en_titles?.title}
        </H2heading>
      </div>
      {/* nav links */}
      <div className='w-full p-2 mt-4 flex flex-col justify-between'>
        <div className='w-full flex flex-col gap-6'>
          {navigationLinks.map((link) => (
            <motion.div
              className='w-full flex items-center justify-center p-2 rounded-lg bg-bg_primary/95  cursor-pointer text-navbar_bg font-semibold'
              key={link.id}
              initial='hidden'
              animate='show'
              variants={cineFadeIn('up', 'tween', 0.5, 0.5)}
              onClick={() => onNavigation(link?.href)}
              whileHover={{ scale: 1.1 }}>
              <p className='w-full flex items-center justify-center'>
                {link.title}
              </p>
            </motion.div>
          ))}
          {/* Wishlist sections */}
          <motion.div
            className='w-full text-center '
            initial='hidden'
            animate='show'
            variants={cineFadeIn('up', 'tween', 0.7, 0.7)}>
            <div className='text-white text-xl font-semibold border-b-2 border-bg_primar'>
              <p>My Watchlist</p>
            </div>
            {!isLoggedIn && (
              <div className='text-lg text-white font-semibold mt-10 bg-orange-500/70 shadow-xl rounded-lg p-2'>
                <p>Login to Access Watchlist Feature</p>
              </div>
            )}
          </motion.div>
        </div>
        {/* Login and Logout Sections */}
        <motion.div
          className='absolute bottom-[20px] w-full lg:w-[200px] max-w-[400px] flex items-center justify-center p-2 rounded-lg bg-bg_primary/95  cursor-pointer text-navbar_bg font-semibold'
          initial='hidden'
          animate='show'
          variants={cineFadeIn('up', 'tween', 0.9, 0.5)}
          whileHover={{ scale: 1.1 }}
          onClick={sessionHandler}>
          <p className='w-full flex items-center justify-center'>
            {isLoggedIn ? 'Logout' : 'Login'}
          </p>
          {/* <Link
            to={'/'}
            className='w-full flex items-center justify-center'>
            {'Login'}
          </Link> */}
        </motion.div>
      </div>
    </>
  );
};

NavBarDetails.propTypes = {
  onNavigation: PropTypes.func.isRequired,
};
export default NavBarDetails;
