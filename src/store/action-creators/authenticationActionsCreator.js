import { insertUserInSessionStorage, removeUserFromSessionStorage } from "src/helper/localStorage";
import { authenticationSliceActions } from "../reducers/authenticationSlice";

/**Login Action to be dispatched */
export const loginAction = (email) => (dispatch) => {
  const loggedInUserData = {
    isLoggedIn: true,
    userEmail: email
  };
  insertUserInSessionStorage(loggedInUserData);
  dispatch(authenticationSliceActions.login(loggedInUserData))
};

/**Logout Action to be dispatched */
export const logoutAction =()=>(dispatch)=>{
    removeUserFromSessionStorage();
    dispatch(authenticationSliceActions.logout())
}
