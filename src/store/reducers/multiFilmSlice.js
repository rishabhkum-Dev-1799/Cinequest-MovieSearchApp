import {createSlice} from '@reduxjs/toolkit'

/**Declaring the Initial State for the Mutlifilm Slice */
const initialState={
    films:[],
    error:null,
    loading:false,
    totalFilms:20
}

/**Creating the Slice Object and defining the reducer Action functions */
const multiFilmSlice= createSlice({
    name:"multiFilms",
    initialState,
    reducers:{
        isFilmsLoading:(state)=>{
            state.loading=true;
        },
        isFilmsLoaded:(state)=>{
            state.loading=true;
        },
        getFilmsSuccess:(state,action)=>{
            state.films=[...state.films,...action.payload];
            state.loading=false;
        },
        getFilmsError:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        resetFilmsData:(state)=>{
            state.films=[];
            state.error=null;
            state.loading=false;
        },
        setFilmsTotalResults:(state,action)=>{
            state.totalFilms=action.payload;
        }
    }
})

/**Returing the multifilmSlice actions and redcur function */
export const multiFilmSliceReducer = multiFilmSlice.reducer;
export const multiFilmActions = multiFilmSlice.actions