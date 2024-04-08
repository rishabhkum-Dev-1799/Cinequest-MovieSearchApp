import { insertUserInSessionStorage, removeUserFromSessionStorage } from "src/helper/localStorage";
import { authenticationSliceActions } from "../reducers/authenticationSlice";

export const loginAction = (email) => (dispatch) => {
  const loggedInUserData = {
    isLoggedIn: true,
    userEmail: email
  };
  insertUserInSessionStorage(loggedInUserData);
  dispatch(authenticationSliceActions.login(loggedInUserData))
};

export const logoutAction =()=>(dispatch)=>{
    removeUserFromSessionStorage();
    dispatch(authenticationSliceActions.logout())
}
