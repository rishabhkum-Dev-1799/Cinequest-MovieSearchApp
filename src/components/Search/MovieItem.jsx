import { motion } from 'framer-motion';
import Proptypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaRegBookmark,FaBookmark } from 'react-icons/fa';

import { H3heading } from '../ui';
import {
  checkIsImageExist,
  generateHighResolutionImage,
} from 'src/helper/manipulationFunc';
import NoPoster from 'src/assets/Images/no-poster.jpg';
import { cineFadeIn } from 'src/utils/motion';
import Button from '../ui/Button/Button';
import { memo, useState } from 'react';

const MovieItemComponent = ({ movieData }) => {
  const navigate = useNavigate();
  const [isMovieAddedToWishList, setIsMovieAddedToWishList] = useState(false);

  // handler functions
  const addToWatchListHandler =(e)=>{
    e.preventDefault();
    e.stopPropagation()
    setIsMovieAddedToWishList((prevValue)=>!prevValue);
    console.log('Add to Watch List');
  }
  return (
    <motion.div
      className=' relative  w-full rounded-lg overflow-hidden shadow-lg cursor-pointer  bg-gray-800 border-gray-700 flex flex-col gap-2 items-center justify-center'
      initial='hidden'
      animate='show'
      whileHover={{ scale: 1.01 }}
      onClick={() => navigate(`/${movieData?.imdbID}`)}
      >
      {/* Add to Watch List Buttoon */}
      <Button className={'absolute z-50 w-[50px] h-[50px] top-2 right-2'} onClick={addToWatchListHandler}>
        {!isMovieAddedToWishList &&<FaRegBookmark
          className='text-white text-2xl'
          size={24}
        />}
        {isMovieAddedToWishList && <FaBookmark
          className='text-green-500 text-2xl'
          size={24}
        /> }
      </Button>
      <div className='overflow-hidden w-full max-w-[500px] h-[400px]'>
        <img
          src={
            checkIsImageExist(movieData?.Poster)
              ? generateHighResolutionImage(movieData?.Poster, 1000)
              : NoPoster
          }
          alt={`${movieData?.Title}-image`}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex flex-wrap flex-col px-2 items-center justify-center gap-2 text-center'>
        <H3heading className='mb-1 text-lg lg:text-lg font-bold tracking-tight text-white'>
          {movieData?.Title}
        </H3heading>
        <p className=' mb-3 text-sm font-semibold text-gray-200'>
          Released: {movieData?.Year}
        </p>
      </div>
    </motion.div>
  );
};

MovieItemComponent.propTypes = {
  movieData: Proptypes.object.isRequired,
  idx: Proptypes.number.isRequired,
};
const MovieItem = memo(MovieItemComponent);
export default MovieItem;
