import { getToastErrorMessage, getToastSuccessMessage } from "src/helper/toastFunctions";
import { watchListActions } from "../reducers/watchlistSlice"
import { errorMessages, successMessages } from "src/lang";
/**AddnewUser Action to Be Dispatched */
export const addNewUserAction=(userId,watchList={watchList:[]})=>(dispatch)=>{
   dispatch( watchListActions.addNewUserWatchList({userId,watchList}));
}

/*AddnewMovie Action to Be Dispatched */
export const addNewMovieAction=(userId,movie)=>(dispatch,getState)=>{
    const watchListDb=getState().watchList?.watchListDb;
    if(watchListDb?.hasOwnProperty(userId) && watchListDb[userId]?.watchList?.some((item)=>item?.imdbID===movie?.imdbID)){
        getToastSuccessMessage(errorMessages?.movieAlreadyExistErrorMessage)
        return 
    }
    else if (watchListDb?.hasOwnProperty(userId)&& !watchListDb[userId]?.watchList?.some((item)=>item?.imdbID===movie?.imdbID)){
        dispatch(watchListActions.addNewMovieToWatchList({userId,movie}));
        getToastSuccessMessage(successMessages?.movieAdded)
        return
    }
    else{
        getToastErrorMessage(errorMessages?.movieAddedError)
        return
    }
}

/**RemoveMovie Action to Be Dispatched */
export const removeMovieAction=(userId,movie)=>(dispatch,getState)=>{
    const watchListDb=getState().watchList?.watchListDb;
    if(watchListDb?.hasOwnProperty(userId) && watchListDb[userId]?.watchList?.some((item)=>item?.imdbID===movie?.imdbID)){
        dispatch(watchListActions.removeMovieFromWatchList({userId,movie}));
        getToastSuccessMessage(successMessages?.movieRemoved)
        return 
    }
    else if (watchListDb?.hasOwnProperty(userId)&& !watchListDb[userId]?.watchList?.some((item)=>item?.imdbID===movie?.imdbID)){
        getToastSuccessMessage(errorMessages?.movieNotInWatchList)
        return
    }
    else {
        getToastErrorMessage(errorMessages?.movieAddedError)
    }
}