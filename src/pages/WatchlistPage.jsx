import { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';

//custom Imports
import SearchInfo from 'src/components/Search/SearchInfo';
import SearchImageError from 'src/components/common/Error/SearchImageError';
import DataFetchLoader from 'src/components/common/Loaders/DataFetchLoader';
import PrimaryButton from 'src/components/ui/Button/PrimaryButton';
import {
  scrollToTop,
  shouldShowScrollToTop,
} from 'src/helper/domManipulationHelper';
import { btnLabels, en_titles } from 'src/lang';
import { cineFadeIn } from 'src/utils/motion';
import { useActions } from 'src/hooks/useActions';
import MovieItem from 'src/components/Search/MovieItem';

const WatchlistPage = () => {
  const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);
  const [watchListDataObj, setWatchListDataObj] = useState({
    watchListData: [],
    isWatchListDataLoading: true,
  });
  const containerRef = useRef(null);
  const navigate = useNavigate();
  /**Redux State Variables */
  const { watchListDb } = useSelector((state) => state.watchList);
  const { isLoggedIn, userEmail } = useSelector(
    (state) => state.authentication
  );
  const { removeMovieAction } = useActions();

  // handler functions
  /*Function handling container scroll value */
  const onScrollHandler = () => {
    const shouldScroll = shouldShowScrollToTop(containerRef.current);
    if (shouldScroll !== isScrollToTopVisible) {
      setIsScrollToTopVisible(shouldScroll);
    }
  };
  /*Function to Navigate to Main Home Page*/
  const onBackHandler = useCallback(() => {
    console.log('onBackHandler');
    navigate('/');
  }, [navigate]);

  /*Handler function to Add Movie to WatchList Dummy Function*/
  const addToWatchListHandler = (loggedInUser, movieData) => {
    return;
  };
  /*Handler function to Remove the Movie from WatchList */
  const removeMovieFromWatchListHandler = (loggedInUser, movieData) => {
    removeMovieAction(loggedInUser, movieData);
    const updatedWatchedListDataObj=watchListDataObj.watchListData.filter((movie) => movie.imdbID !== movieData.imdbID);
    setWatchListDataObj((prevValue) => ({
      ...prevValue,
      watchListData: updatedWatchedListDataObj,
    }));
  };

  // UseEffects for loading Data
  useEffect(() => {
    if (isLoggedIn && watchListDb.hasOwnProperty(userEmail)) {
      setWatchListDataObj({
        watchListData: watchListDb[userEmail].watchList,
        isWatchListDataLoading: false,
      });
    }
  }, []);
  return (
    <div
      className='p-4 w-full h-full overflow-y-scroll flex flex-col gap-4 items-center '
      ref={containerRef}
      onScroll={onScrollHandler}>
      {/* Search Intro */}
      <div className='w-full'>
        <SearchInfo
          mobileTitle={en_titles?.mobilePersonalizedWatchList}
          desktopTitle={en_titles.personalizedWatchList}
          infoSubtitle={en_titles?.personalizedInfo}
        />
      </div>
      {/* Showing Loader If the Data is Loading */}
      {watchListDataObj.isWatchListDataLoading && (
        <div className='w-full h-full flex items-center justify-center'>
          <div className='w-full flex items-center justify-center'>
            <DataFetchLoader />
          </div>
        </div>
      )}
      {/* /*Showing Empty Data Object if the WatchListData is Empty } */}
      {!watchListDataObj?.isWatchListDataLoading &&
        (!watchListDataObj?.watchListData ||
          watchListDataObj?.watchListData.length === 0) && (
          <motion.div
            className='w-full h-full flex flex-col gap-2 items-center justify-center'
            initial='hidden'
            animate='show'
            variants={cineFadeIn('up', 'tween', 0.7, 0.5)}>
            <div className='w-full flex items-center justify-center'>
              <SearchImageError
                errorMessage={
                  'Your WatchList Is Empty ! Start Adding Your Favorite Movies Now'
                }
              />
            </div>
            <PrimaryButton
              onClick={onBackHandler}
              label={btnLabels.errorBack}
            />
          </motion.div>
        )}
      {/* Showing WatchList Data */}
      {!watchListDataObj?.isWatchListDataLoading &&
        watchListDataObj?.watchListData &&
        watchListDataObj?.watchListData.length > 0 && (
          <motion.div className='w-full p-2 grid gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-5' initial="hidden" animate="show"  variants={cineFadeIn("up","tween",0.7,0.5)}>
            {watchListDataObj.watchListData.map((film, index) => (
              <MovieItem
                key={uuid()}
                movieData={film}
                idx={index}
                isLoggedIn={isLoggedIn}
                loggedInUser={userEmail}
                isAddedToWatchList={true}
                onAddMovie={addToWatchListHandler}
                onRemoveMovie={removeMovieFromWatchListHandler}
              />
            ))}
          </motion.div>
        )}
      {/**Scroll to top Button ----*/}
      {isScrollToTopVisible && (
        <div
          className='w-[50px] h-[50px] z-30 cursor-pointer rounded-full fixed bottom-2 right-3 bg-black flex items-center justify-center text-white hover:scale-105 '
          onClick={() => scrollToTop(containerRef.current)}>
          <AiOutlineArrowUp
            fontSize={32}
            fontWeight='bold'
          />
        </div>
      )}
    </div>
  );
};

export default WatchlistPage;
