import { createSlice } from "@reduxjs/toolkit";

const initialStates={
    isLoggedIn:false,
    userEmail:null,
    userFirstName:null
}

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