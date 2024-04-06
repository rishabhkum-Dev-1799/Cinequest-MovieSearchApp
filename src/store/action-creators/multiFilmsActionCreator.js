import axios from "axios";
import { multiFilmActions } from "../reducers/multiFilmSlice";
import { OMBD_API_KEY, OMDB_API_URL } from "src/constants";

export const getSearchFilms=(page,searchQuery)=>async(dispatch,getState)=>{
    const filmList=getState()?.multiFilms.films;
    /**Setting the dispatch for loading the films ----->rk*/
    dispatch(multiFilmActions.isFilmsLoading());
    /**Fetching the films from the API */
    const responseObj= await axios.get(`${OMDB_API_URL}?apikey=${OMBD_API_KEY}`,{
        params:{s:searchQuery,page:page}
    }).then((responseObj)=>responseObj)
    /**Dispatching the Actions if the API Request Has Errors ---->rk */
    if (responseObj.data.Error){
        if(filmList.length===0){
            dispatch(multiFilmActions.getFilmsError(responseObj.data.Error));
            return;
        }
        dispatch(multiFilmActions.isFilmsLoaded());
        return;
    } 
    /**Dispatching the Actions if the API Request is SuccessFull--->rk */
    dispatch(multiFilmActions.getFilmsSuccess(responseObj?.data?.Search));
    dispatch(multiFilmActions.setFilmsTotalResults(responseObj?.data?.totalResults));/////
}

export const resetFilms =()=>(dispatch)=>{
    dispatch(multiFilmActions.resetFilmsData())
}