import { createSlice } from "@reduxjs/toolkit";
import { getUserFromSessionStorage } from "src/helper/localStorage";

/**Getting session storage if the user is logged in */
const sessionStorageUser=getUserFromSessionStorage();
/** Defining the initial states */
const initialStates={
    isLoggedIn:sessionStorageUser?sessionStorageUser?.isLoggedIn:false,
    userEmail:sessionStorageUser?sessionStorageUser?.userEmail:null,
    userFirstName:sessionStorageUser?sessionStorageUser?.userFirstName:null
}
/** Created the authentication slice */
const authenticationSlice = createSlice({
    name:"authentication",
    initialState:initialStates,
    reducers:{
        login:(state,action)=>{
            state.isLoggedIn=true;
            state.userEmail=action.payload.userEmail;
        },
        logout:(state,action)=>{
            state.isLoggedIn=false;
            state.userEmail=null;
            state.userFirstName=null;
        },
        register:(state,action)=>{
            state.isLoggedIn=true;
            state.userEmail=action.payload.userEmail;
            state.userFirstName=action.payload.userFirstName;
        }
    }
})

export const authenticationSliceReducer = authenticationSlice.reducer;
export const authenticationSliceActions = authenticationSlice.actions;