import { useState, useEffect, useRef } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import MoviesList from 'src/components/Search/MoviesList';

import SearchBar from 'src/components/Search/SearchBar';
import SearchInfo from 'src/components/Search/SearchInfo';
import StartSearch from 'src/components/common/Placeholders/StartSearch';
import {
  scrollToTop,
  shouldShowScrollToTop,
} from 'src/helper/domManipulationHelper';
import { useActions } from 'src/hooks/useActions';
import { useDebounce } from 'src/hooks/useDebounce';
import { en_titles } from 'src/lang';

const CineSearchPage = () => {
  const [queryDetails, setQueryDetails] = useState({
    searchQuery: 'Titanic',
    page: 1,
  });
  const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);
  const containerRef = useRef(null);
  /** hooks and store functions*/
  const { getSearchFilms, resetFilms } = useActions();
  const debouncedFetchFilmsWrapper = useDebounce(getSearchFilms, 500);
  const { error, totalFilms ,loading } = useSelector((state) => state.multiFilms);

  // handler functions
  const setSearchQueryHandler = (searchQuery) => {
    setQueryDetails((prevValue) => ({
      ...prevValue,
      searchQuery: searchQuery,
    }));
  };
  const onScrollHandler = () => {
    const shouldScroll = shouldShowScrollToTop(containerRef.current);
    if (shouldScroll !== isScrollToTopVisible) {
      setIsScrollToTopVisible(shouldScroll);
    }
  };
  //UseEffects for Side Effect Handling
  /**This Effect will fetch the results as the user writes into the search panel -->rk*/
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

  return (
    <div
      className='p-4 w-full h-full  overflow-y-scroll flex flex-col gap-4 items-center '
      ref={containerRef}
      onScroll={onScrollHandler}>
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
      {queryDetails?.searchQuery&&<div className='w-full'>
        <MoviesList setPage={setQueryDetails} />
      </div>}
      {/**Scroll to top Button ----*/}
      {isScrollToTopVisible && (
        <div
          className='w-[50px] h-[50px] z-50 cursor-pointer rounded-full fixed bottom-2 right-3 bg-black flex items-center justify-center text-white hover:scale-105 '
          onClick={()=>scrollToTop(containerRef.current)}>
          <AiOutlineArrowUp
            fontSize={32}
            fontWeight='bold'
          />
        </div>
      )}
      {/* End of the Images Results Message */}
      {queryDetails.page>Math.ceil(totalFilms/10)&& !error && !loading && (
        <div className="mt-3 h-[50px] w-full text-center text-xl font-bold text-navbar_bg ">
          {en_titles?.endOfResults}
      </div>
      )}
      {/* Empty Search Results */}
      {!queryDetails.searchQuery &&(
          <div className='w-full flex items-start justify-center'>
              <StartSearch/>
          </div>
      )}
    </div>
  );
};

export default CineSearchPage;
