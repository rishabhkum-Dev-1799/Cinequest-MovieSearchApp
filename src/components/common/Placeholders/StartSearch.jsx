import PropTypes from 'prop-types'

import StartSearchImage from "src/assets/Images/start_search.png"


const StartSearch = ({message}) => {
  return (
    <div className='w-full p-4 md:w-[50%] lg:w-[60%] flex flex-col gap-2 text-center items-center justify-center'>
      <p className='h-[50px] w-full text-center  text-base md:text-lg lg:text-2xl font-bold text-navbar_bg'>
        {message|| 'Ready to dive into movie quest? Start your search now🎬✨'}
      </p>
      <div className='w-full overflow-hidden max-w-[400px] min-w-[100px]'>
        <img
          src={StartSearchImage}
          alt='search_error.jpg'
          className='w-full object-contain'
        />
      </div>
    </div>
  );
};

StartSearch.propTypes = {
    message: PropTypes.string,
};

export default StartSearch