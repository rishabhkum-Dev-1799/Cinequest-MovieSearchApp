import React, { lazy, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

import MovieItem from './MovieItem';

const MoviesList = ({ setPage}) => {
  const { films, loading, error } = useSelector((state) => state.multiFilms);
  const intersectionRef = useRef();

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
  return (
    <section className='w-full overflow-hidden'>
      {!error && films.length > 0 && (
        <div className='w-full p-2 overflow-hidden grid gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:max-4xl:grid-col-5'>
          {films.map((film, index) => (
            <MovieItem key={uuid()} movieData={film} idx={index} />
          ))}
        </div>
      )}
      <div className="h-10 w-full" ref={intersectionRef} />
    </section>
  );
};
MoviesList.propTypes = {
  setPage: PropTypes.func.isRequired,
  containerRef: PropTypes.object,
};

export default MoviesList;
