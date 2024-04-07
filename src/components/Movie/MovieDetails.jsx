import React from 'react'
import {motion} from 'framer-motion'
import PropTypes from 'prop-types'

import { cineFadeIn } from 'src/utils/motion'
import { checkIsImageExist, generateHighResolutionImage, isStringApplicable } from 'src/helper/manipulationFunc'
import NoPoster from 'src/assets/Images/no-poster.jpg';
import { btnLabels, labels } from 'src/lang'

const MovieDetails = ({film,onBack}) => {

    /**Handler Functions */
    const onNavigateBack =(event)=>{
        event.preventDefault();
        onBack();
    }
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4 md:flex-row  md:justify-between md:items-start  lg:gap-4 p-2 '>
          {/* Image and Rating Section */}
          <motion.div
            className='w-full md:w-1/3 flex flex-col p-2  items-center justify-between gap-4 max-w-[500px] overflow-hidden'
            initial='hidden'
            animate='show'
            variants={cineFadeIn('right', 'spring', 0.3, 0.5)}>
            <img
              src={
                checkIsImageExist(film?.Poster)
                  ? generateHighResolutionImage(film?.Poster, 1000)
                  : NoPoster
              }
              alt='movie_image'
              className='min-h-[300px] min-w-[168px] md:min-h-[300px] md:min-w-[281px] '
            />
            {isStringApplicable(film?.imdbRating) && (
              <div className='rounded-xl p-4 bg-navbar_bg text-white font-bold'>
                <p className='text-lg font-bold text-white'>
                  {`IMDB Rating:${film?.imdbRating}/10`}
                </p>
              </div>
            )}
          </motion.div>
          {/* Details Section */}
          <div className='flex-1 flex p-2 h-full flex-col flex-wrap gap-2 w-full justify-between items-start overflow-hidden'>
            <motion.h1
              className='text-3xl text-[#E86A92] font-bold'
              initial='hidden'
              animate='show'
              variants={cineFadeIn(
                'up',
                'spring',
                0.5,
                0.5
              )}>{`${film.Title} (${film.Year})`}</motion.h1>
            <motion.p
              className='text-md font-light text_navbar_bg'
              initial='hidden'
              animate='show'
              variants={cineFadeIn('up', 'spring', 0.7, 0.5)}>
              {isStringApplicable(film.Plot) ? film.Plot : 'No Plot Available'}
            </motion.p>
            <motion.h3
              className='text-[#E86A92] font-semibold text-xl'
              initial='hidden'
              animate='show'
              variants={cineFadeIn('up', 'spring', 0.9, 0.5)}>
              {' '}
              {labels?.movieDetails}
            </motion.h3>
            <motion.div
              className='grid grid-cols-3 gap-1'
              initial='hidden'
              animate='show'
              variants={cineFadeIn('up', 'spring', 1.1, 0.5)}>
              <div className='text-navbar_bg col-span-1 font-semibold'>
                {labels?.released}
              </div>
              <div className='col-span-2 px-4 font-light'>{film.Released}</div>
              <div className='text-navbar_bg col-span-1 font-semibold'>
                {labels?.director}
              </div>
              <div className='col-span-2 px-4 font-light '>{film.Director}</div>
              <div className='text-navbar_bg col-span-1 font-semibold'>
                {labels?.actors}
              </div>
              <div className='col-span-2 px-4 font-light'>{film.Actors}</div>
              <div className='text-navbar_bg col-span-1 font-semibold'>
                {labels?.genres}
              </div>
              <div className='col-span-2 px-4 font-light'>{film.Genre}</div>
              <div className='text-navbar_bg col-span-1 font-semibold'>
                {labels?.runtime}
              </div>
              <div className='col-span-2 px-4 font-light'>{film.Runtime}</div>
              <div className='text-navbar_bg col-span-1 font-semibold'>
                {labels?.country}
              </div>
              <div className='col-span-2 px-4 font-light'>{film.Country}</div>
            </motion.div>
            <div className='w-full flex items-center justify-center gap-2'>
              <motion.button
                variants={cineFadeIn('up', 'spring', 1.3, 0.5)}
                initial='hidden'
                animate='show'
                whileHover={{ scale: 1.1 }}
                className='mt-5 rounded-full bg-[#E86A92] px-12 py-4 text-xl font-bold text-white '
                onClick={onNavigateBack}>
                {btnLabels?.back}
              </motion.button>
            </div>
          </div>
        </div>
  )
}

MovieDetails.propTypes = {
    film: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired
}
export default MovieDetails