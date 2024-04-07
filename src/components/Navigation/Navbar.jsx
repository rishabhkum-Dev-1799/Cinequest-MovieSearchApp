import React from 'react'

/**  custom imports */
import { H2heading } from 'src/components/ui'
import { en_titles } from 'src/lang'
import CineQuestLogo from "src/assets/Images/cinequest_logo.png"



const Navbar = () => {
  return (
    <nav className='bg-navbar_bg w-full h-full p-4 flex flex-col items-center '>
      {/* logo and Title */}
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
      <div></div>
      {/* wishlist sections */}
      <div></div>
    </nav>
  );
}

export default Navbar