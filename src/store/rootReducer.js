import { combineReducers } from "@reduxjs/toolkit";
import { multiFilmSliceReducer } from "./reducers/multiFilmSlice";
import { singleFilmSliceReducer } from "./reducers/singleFilmSlice";

/**Combining the Reducers into the Root Reducers */
export const rootReducer = combineReducers({
    multiFilm:multiFilmSliceReducer,
    singleFilm:singleFilmSliceReducer
});