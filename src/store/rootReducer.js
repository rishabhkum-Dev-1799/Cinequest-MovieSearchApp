import { combineReducers } from "@reduxjs/toolkit";
import { multiFilmSliceReducer } from "./reducers/multiFilmSlice";
import { singleFilmSliceReducer } from "./reducers/singleFilmSlice";
import { authenticationSliceReducer } from "./reducers/authenticationSlice";

/**Combining the Reducers into the Root Reducers */
export const rootReducer = combineReducers({
    multiFilms:multiFilmSliceReducer,
    singleFilm:singleFilmSliceReducer,
    authentication:authenticationSliceReducer
});