import React, { useState, useEffect } from 'react';
import {v4 as uuid} from "uuid";
import { useSelector } from 'react-redux';
import MoviesList from 'src/components/Search/MoviesList';

import SearchBar from 'src/components/Search/SearchBar';
import SearchInfo from 'src/components/Search/SearchInfo';
import { useActions } from 'src/hooks/useActions';
import { useDebounce } from 'src/hooks/useDebounce';

const CineSearchPage = () => {
  const [queryDetails, setQueryDetails] = useState({
    searchQuery: 'Titanic',
    page: 1,
  });
  const { getSearchFilms, resetFilms } = useActions();
  const debouncedFetchFilmsWrapper = useDebounce(getSearchFilms, 500);
  const { error, totalFilms } = useSelector((state) => state.multiFilms);

  //UseEffects for Side Effect Handling
  /**This Effect will fetch the results as the user writes into the search panel */
  useEffect(() => {
    if (queryDetails?.page > Math.ceil(totalFilms / 10)) return;
    if (queryDetails?.searchQuery.trim()) {
      debouncedFetchFilmsWrapper(
        queryDetails?.page,
        queryDetails?.searchQuery.trim()
      );
    }
  }, [queryDetails?.page, queryDetails?.searchQuery]);

  /** This effect will handle reseting of the context when user types in the search index -->rk  */
  useEffect(() => {
    resetFilms();
    setQueryDetails((prevValue) => ({ ...prevValue, page: 1 }));
  }, [queryDetails?.searchQuery]);

  // handler functions
  const setSearchQueryHandler = (searchQuery) => {
    setQueryDetails((prevValue) => ({
      ...prevValue,
      searchQuery: searchQuery,
    }));
  };
  console.log(queryDetails.searchQuery);

  return (
    <div className='p-4 w-full h-full  overflow-y-scroll flex flex-col gap-4 items-center '>
      {/* Search Intro */}
      <div className='w-full'>
        <SearchInfo />
      </div>
      {/* Seacrch Bar */}
      <div className='w-full'>
        <SearchBar
          searchQuery={queryDetails?.searchQuery}
          setSearchQuery={setSearchQueryHandler}
        />
      </div>
      {/* Search Results */}
      <div className='w-full'>
        <MoviesList setPage={() => console.log('Hello')} />
      </div>
    </div>
  );
};

export default CineSearchPage;
