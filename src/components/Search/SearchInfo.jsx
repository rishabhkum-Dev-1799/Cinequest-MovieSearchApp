import { motion } from 'framer-motion';
import PropTypes from 'prop-types'

// custom Imports
import { cineTextVariant } from 'src/utils/motion';
import { en_titles } from 'src/lang';
import CineQuestLogo from "src/assets/Images/cinequest_logo.png"

const SearchInfo = ({mobileTitle,desktopTitle,infoSubtitle}) => {
  return (
    <div className='w-full flex flex-col gap-4  p-2 lg:p-4 text-center relative'>
      <div className='w-full lg:hidden flex  justify-end'>
        <img
          src={CineQuestLogo}
          alt='cinequest_logo'
          className='w-[40px] object-contain'
        />
      </div>
      <motion.h1
        className='block md:hidden text-4xl font-bold text-white  uppercase lg:text-5xl text-bg-gradient'
        variants={cineTextVariant(0.5)}
        initial='hidden'
        animate='show'
      >
        {mobileTitle}
      </motion.h1>
      <motion.h1
        className='hidden md:block text-3xl font-bold text-white lg:text-5xl text-bg-gradient'
        variants={cineTextVariant(0.5)}
        initial='hidden'
        animate='show'
      >
        {desktopTitle}
      </motion.h1>
      <motion.p
        className='font-semibold text-sm lg:text-xl'
        initial='hidden'
        animate='show'
        variants={cineTextVariant(0.5)}
      >
        {infoSubtitle}
      </motion.p>
    </div>
  );
};

SearchInfo.propTypes={
  mobileTitle:PropTypes.string.isRequired,
  desktopTitle:PropTypes.string.isRequired,
  infoSubtitle:PropTypes.string.isRequired
}
export default SearchInfo;
