import React,{useState} from 'react';
import SearchBar from 'src/components/Search/SearchBar';
import SearchInfo from 'src/components/Search/SearchInfo';

const CineSearchPage = () => {
    const [queryDetails,setQueryDetails]=useState({
        searchQuery:"",
        page:1
    })

  return (
    <div className='p-4 w-full h-full  overflow-y-scroll flex flex-col gap-4 items-center '>
      {/* Search Intro */}
      <div className='w-full'>
        <SearchInfo />
      </div>
      {/* Seacrch Bar */}
      <div className='w-full'>
        <SearchBar />
      </div>
      {/* Search Results */}
      <div className=''> Search Results</div>
    </div>
  );
};

export default CineSearchPage;
