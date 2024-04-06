import React from 'react';
import Navbar from './Navbar';

const NavigationWrapper = ({ children }) => {
  return (
    <div className='w-full flex items-center gap-4'>
      <section className='hidden lg:block lg:w-[30vw] lg:h-screen max-w-[250px]'>
        <Navbar />
      </section>
      <section className='flex-1 h-screen overflow-hidden'>{children}</section>
    </div>
  );
};

export default NavigationWrapper;
