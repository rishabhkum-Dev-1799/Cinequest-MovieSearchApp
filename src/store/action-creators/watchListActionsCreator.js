import { watchListActions } from "../reducers/watchlistSlice"
/**AddnewUser Action to Be Dispatched */
export const addNewUserAction=(userId,watchList={})=>(dispatch)=>{
   dispatch( watchListActions.addNewUserWatchList({userId,watchList}));
}

/*AddnewMovie Action to Be Dispatched */
export const addNewMovieAction=(userId,movie)=>(dispatch)=>{
    dispatch(watchListActions.addNewMovieToWatchList({userId,movie}));
}

/**RemoveMovie Action to Be Dispatched */
export const removeMovieAction=(userId,movie)=>(dispatch)=>{
    dispatch(watchListActions.removeMovieFromWatchList({userId,movie}));
}