import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { useNavigate } from 'react-router-dom';

import NavBarDetails from './NavBarDetails';
import { cineFadeIn } from 'src/utils/motion';

const MobileNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate=useNavigate();

  const onNavigationHandler=(href)=>{
    setIsDrawerOpen((prevValue) => !prevValue);
    navigate(href);
  }
  return (
    <>
      <div
        className={twMerge(
          `fixed z-[50] top-[10px] left-[10px] w-[70px] h-[70px] rounded-full p-2 bg-navbar_bg text-white flex items-center justify-center ${
            isDrawerOpen ? 'bg-bg_primary text-navbar_bg' : ''
          }`
        )}
        onClick={() => setIsDrawerOpen((prevValue) => !prevValue)}>
        {!isDrawerOpen && <GiHamburgerMenu size={32} />}
        {isDrawerOpen && <AiOutlineClose size={32} />}
      </div>
      {isDrawerOpen && (
        <motion.div
          className='absolute top-0 left-0 w-full h-full bg-navbar_bg z-[40] px-4 py-8'
          initial='hidden'
          whileInView='show'
          variants={cineFadeIn('right', 'tween', 0.2, 0.5)}>
          <div className='w-full h-full relative'>
            <NavBarDetails onNavigation={onNavigationHandler}/>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default MobileNavbar;
