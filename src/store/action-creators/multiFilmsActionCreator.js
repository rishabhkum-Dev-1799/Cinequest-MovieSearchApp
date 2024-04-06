import axios from "axios";
import { multiFilmActions } from "../reducers/multiFilmSlice";
import { OMBD_API_KEY } from "src/constants";

export const getSearchFilms=(page,searchQuery)=>async(dispatch,getState)=>{
    const filmList=getState().films.films;
    /**Setting the dispatch for loading the films */
    dispatch(multiFilmActions.isFilmsLoading());
    /**Fetching the films from the API */
    const responseObj= await axios.get(`${OMBD_API_KEY}/?apikey=${OMBD_API_KEY}`,{
        params:{s:searchQuery,page:page}
    });
    /**Dispatching the Actions if the API Request Has Errors */
    if (responseObj.data.Error){
        if(filmList.length===0){
            dispatch(multiFilmActions.getFilmsError(responseObj.data.Error));
            return;
        }
        dispatch(multiFilmActions.isFilmsLoaded());
        return;
    } 
    /**Dispatching the Actions if the API Request is SuccessFull */
    dispatch(multiFilmActions.getFilmsSuccess(responseObj?.data?.Search));
    dispatch(multiFilmActions.setFilmsTotalResults(responseObj?.data?.totalResults));

}