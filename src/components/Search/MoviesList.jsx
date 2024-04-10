import {useEffect, useRef,memo } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

import MovieItem from './MovieItem';
import DataFetchLoader from 'src/components/common/Loaders/DataFetchLoader';
import SearchImageError from '../common/Error/SearchImageError';
import StartSearch from '../common/Placeholders/StartSearch';
import { useActions } from 'src/hooks/useActions';

const MoviesListComponent = memo(({setPage}) => {
  const { films, loading, error } = useSelector((state) => state.multiFilms);
  const {isLoggedIn,userEmail}=useSelector((state)=>state.authentication);
  const intersectionRef = useRef();
  const { addNewMovieAction,removeMovieAction } = useActions();

  useEffect(() => {
    if (!intersectionRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPage((prevValue)=>({...prevValue,page:prevValue.page+1}));
      }
    });

    setTimeout(() => {
      observer.observe(intersectionRef.current);
    }, 1000);

    document.addEventListener("DOMContentLoaded", () => {
      return () => {
        observer.disconnect();
      };
    });
  }, [intersectionRef.current]);

  // handler functions
  const addToWatchListHandler = (loggedInUser,movieData) => {
    addNewMovieAction(loggedInUser, movieData);
  };
  const removeMovieFromWatchListHandler = (loggedInUser,movieData) => {
    removeMovieAction(loggedInUser, movieData);
  }

  if(error){
    return (<div className='w-full flex items-center justify-center'>
        {error === "Incorrect IMDb ID." && <StartSearch/>}
        {error !== "Incorrect IMDb ID." && <SearchImageError errorMessage={error==="Too many results."?"To Many Results Please Search More Specific Movie Name":error}/>}
    </div>
  )}
  return (
    <section className='w-full overflow-hidden'>
      {!error && films.length > 0 && (
        <div className='w-full p-2 overflow-hidden grid gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-5'>
          {films.map((film, index) => (
            <MovieItem
              key={uuid()}
              movieData={film}
              idx={index}
              isLoggedIn={isLoggedIn}
              loggedInUser={userEmail}
              isAddedToWatchList={false}
              onAddMovie={addToWatchListHandler}
              onRemoveMovie={removeMovieFromWatchListHandler}
            />
          ))}
        </div>
      )}
      {loading && (
        <div className='my-2 w-full flex items-center justify-center text-center'>
          <DataFetchLoader/>
        </div>
      )}
      <div
        className='h-10 w-full'
        ref={intersectionRef}
      />
    </section>
  );
});
MoviesListComponent.propTypes = {
  setPage: PropTypes.func.isRequired,
  containerRef: PropTypes.object,
};

const MoviesList=memo(MoviesListComponent);
export default MoviesList;
