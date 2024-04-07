import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
/**  custom imports */
import { H2heading } from 'src/components/ui';
import { en_titles } from 'src/lang';
import CineQuestLogo from 'src/assets/Images/cinequest_logo.png';
import { navigationLinks } from 'src/data';
import { cineFadeIn } from 'src/utils/motion';
const NavBarDetails = ({ onNavigation }) => {
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
            className='w-full text-center border-b-2 border-bg_primary '
            initial='hidden'
            animate='show'
            variants={cineFadeIn('up', 'tween', 0.7, 0.7)}>
            <motion.p className='text-white text-xl font-semibold'>
              My Watchlist
            </motion.p>
          </motion.div>
        </div>
        {/* Login and Logout Sections */}
        <motion.div
          className='absolute bottom-[20px] w-full lg:w-[200px] max-w-[400px] flex items-center justify-center p-2 rounded-lg bg-bg_primary/95  cursor-pointer text-navbar_bg font-semibold'
          initial='hidden'
          animate='show'
          variants={cineFadeIn('up', 'tween', 0.9, 0.5)}
          whileHover={{ scale: 1.1 }}
          onClick={() => onNavigation("/")}
          >
            <p className='w-full flex items-center justify-center'>Login</p>
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
