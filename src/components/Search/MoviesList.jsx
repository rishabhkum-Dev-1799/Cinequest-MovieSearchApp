import React,{lazy} from 'react'
import {useSelector} from 'react-redux'
import {v4 as uuid} from "uuid";
import PropTypes from "prop-types"
import MovieItem from './MovieItem';

// custom Components
//const MovieItem=lazy(()=>import("src/components/Search/MovieItem"))

const MoviesList = ({setPage}) => {
    const {films,loading,error}=useSelector((state)=>state.multiFilms)
    console.log("films--->",films)
  return (
    <section className="w-full overflow-hidden">
        {!error && films.length>0 && (
            <div className='w-full p-2 overflow-hidden grid gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:max-4xl:grid-col-5'>
                {films.map((film,index)=>(
                    <MovieItem key={uuid()} movieData={film} idx={index}/>
                ))}
            </div>
        )}
    </section>
  )
}
MoviesList.propTypes={
setPage:PropTypes.func.isRequired
}

export default MoviesList