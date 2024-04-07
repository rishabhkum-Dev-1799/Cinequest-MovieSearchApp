import { createSlice } from "@reduxjs/toolkit";


/**Declaring the Initial State for the Singlefilm Slice */
const initialState={
    film:{},
    loading:false,
    error:null,
}

/**Creating the Slice Object and defining the reducer Action functions */
const singleFilmSlice=createSlice({
    name:"singleFilm",
    initialState,
    reducers:{
        isFilmLoading:(state)=>{
            state.loading=true
            state.error=null;
        },
        getFilmSuccess:(state,action)=>{
            state.film=action.payload;
            state.loading=false;
        },
        getFilmError:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        }
    }
})

/**Returing the singlefilmSlice actions and redcur function */
export const singleFilmSliceReducer = singleFilmSlice.reducer;
export const singleFilmActions= singleFilmSlice.actions;