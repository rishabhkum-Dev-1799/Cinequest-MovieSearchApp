import React from 'react';
import { motion } from 'framer-motion';

// custom Imports
import { cineTextVariant } from 'src/utils/motion';
import { en_titles } from 'src/lang';
import CineQuestLogo from "src/assets/Images/cinequest_logo.png"

const SearchInfo = () => {
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
        className='text-3xl font-bold text-white lg:text-5xl text-bg-gradient'
        variants={cineTextVariant(0.5)}
        initial='hidden'
        animate='show'
      >
        {en_titles?.welcomeTitle}
      </motion.h1>
      <motion.p
        className='font-semibold text-sm lg:text-xl'
        initial='hidden'
        animate='show'
        variants={cineTextVariant(0.5)}
      >
        {en_titles?.searchInfo}
      </motion.p>
    </div>
  );
};

export default SearchInfo;
