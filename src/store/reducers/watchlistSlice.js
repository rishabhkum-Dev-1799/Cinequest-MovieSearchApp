import { getWatchListDetailsFromLocalStorage, updateWatchListDetailsInLocalStorage } from "src/helper/localStorage";

import { createSlice } from "@reduxjs/toolkit";

const watchListDb=getWatchListDetailsFromLocalStorage()

if(!watchListDb){
    updateWatchListDetailsInLocalStorage({})
}

/**Declaring the Initial State for the Watchlist Slice */
const initialState={
    watchListDb:watchListDb || {},
    newUser:true
}
/**Creating the Slice Object and defining the reducer Action functions */
const watchListSlice = createSlice({
    name:"watchList",
    initialState:initialState,
    reducers:{
        addNewUserWatchList:(state,action)=>{
            state.watchListDb[action.payload.userId]=action.payload.watchList;
            updateWatchListDetailsInLocalStorage(state.watchListDb)
        },
        addNewMovieToWatchList:(state,action)=>{
            state.watchListDb[action.payload.userId].watchList.push(action.payload.movie)
            updateWatchListDetailsInLocalStorage(state.watchListDb)
        },
        removeMovieFromWatchList:(state,action)=>{
            state.watchListDb[action.payload?.userId].watchList = state.watchListDb[action.payload?.userId].watchList.filter((movie)=>movie?.imdbID !== action.payload?.movie?.imdbID)
            updateWatchListDetailsInLocalStorage(state.watchListDb)
        },
        checkIsUserHasWatchList:(state,action)=>{
            state.newUser = state.watchListDb[action.payload.userId] ? false : true
        }
    }
})

/**Returing the singlefilmSlice actions and reducer function */
export const watchListActions = watchListSlice.actions
export const watchListReducer = watchListSlice.reducer


/**
 * Payload of the actions
 * 
 * addNewUserWatchList:{userId:"test123@gmail.com",watchList:[]}
 * addNewMovieToWatchList:{userId:"test123@gmail.com",movie:{"Movie Payload"}}
 * removeMovieFromWatchList:{userId:"test123@gmail.com",movie:{"Movie Payload"}}
 */