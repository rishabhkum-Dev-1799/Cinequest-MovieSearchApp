import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { cineFadeIn } from 'src/utils/motion';

import CineQuestLogo from 'src/assets/Images/cinequest_logo.png';
import { en_titles } from 'src/lang';

const FormWrapper = ({ label,infoLabel, children }) => {
  return (
    <motion.div
      className='w-[95%] md:w-[50%] max-w-[800px]  rounded-lg p-4 bg-navbar_bg flex flex-col gap-2 '
      initial='hidden'
      animate='show'
      variants={cineFadeIn('up', 'tween', 0.2, 0.5)}>
      <div className='w-full flex items-center justify-between'>
      <div>
          <img
            src={CineQuestLogo}
            alt='cinequest_logo'
            className='w-[40px] object-contain'
          />
        </div>
        <h1 className='text-xl lg:text-2xl font-bold uppercase text-bg-gradient'>{en_titles.title}</h1>
      </div>
      <motion.h1 className='text-2xl lg:text-4xl font-bold leading-5 text-center text-white uppercase' initial="hidden" animate="show" variants={cineFadeIn("up","tween",0.5,0.5)}>{label}</motion.h1>
      <motion.p className='text-center font-semibold text-xs text-bg-gradient' initial="hidden" animate="show" variants={cineFadeIn("up","tween",0.6,0.5)}>{infoLabel}</motion.p>
      <div className='w-full'>{children}</div>
    </motion.div>
  );
};
FormWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  infoLabel: PropTypes.string.isRequired,
};
export default FormWrapper;
