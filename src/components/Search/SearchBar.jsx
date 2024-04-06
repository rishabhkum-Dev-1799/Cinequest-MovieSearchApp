import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { cineFadeIn } from 'src/utils/motion';

const SearchBar = (props) => {
  return (
    <div className='w-full p-2 lg:p-4 flex items-center justify-center'>
      <motion.div variants={cineFadeIn("up", "tween", 0.2, 0.3)} initial="hidden" animate="show" whileHover={{scale:1.05}} className='relative flex items-center justify-start gap-2 px-2 rounded-lg w-full lg:w-1/2  overflow-hidden bg-input_bg_dark border border-white min-w-[200px]'>
        <AiOutlineSearch
          className='absolute text-black w-[30px]'
          fontSize={32}
        />
        <motion.input type='text' placeholder='Enter Your Fav Watch...' className=" flex-1 h-16 px-12 placeholder:text-black bg-transparent outline-none placeholder:text-sm text-lg font-bold"/>
      </motion.div>
    </div>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
