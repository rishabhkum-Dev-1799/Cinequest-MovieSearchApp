import { motion } from 'framer-motion';
import Proptypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { H3heading } from '../ui';
import {
  checkIsImageExist,
  generateHighResolutionImage,
} from 'src/helper/manipulationFunc';
import NoPoster from 'src/assets/Images/no-poster.jpg';


const MovieItem = ({ movieData }) => {
  const navigate=useNavigate();
  return (
    <motion.div
      className='w-full rounded-lg overflow-hidden shadow-lg cursor-pointer  bg-gray-800 border-gray-700 flex flex-col gap-2 items-center justify-center'
      initial='hidden'
      animate='show'
      whileHover={{ scale: 1.01 }}
      // variants={cineFadeIn(
      //   'left',
      //   'spring',
      //   0.2,
      //   0.5
      // )}
      onClick={()=>navigate(`/${movieData?.imdbID}`)}
    >
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

MovieItem.propTypes = {
  movieData: Proptypes.object.isRequired,
  idx: Proptypes.number.isRequired,
};

export default MovieItem;
