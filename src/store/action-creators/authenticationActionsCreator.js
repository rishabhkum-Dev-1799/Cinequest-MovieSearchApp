import { insertUserInSessionStorage, removeUserFromSessionStorage } from "src/helper/localStorage";
import { authenticationSliceActions } from "../reducers/authenticationSlice";
import { getToastSuccessMessage } from "src/helper/toastFunctions";
import { labels } from "src/lang";

/**Login Action to be dispatched */
export const loginAction = (email) => (dispatch) => {
  const loggedInUserData = {
    isLoggedIn: true,
    userEmail: email
  };
  insertUserInSessionStorage(loggedInUserData);
  dispatch(authenticationSliceActions.login(loggedInUserData))
  getToastSuccessMessage(labels?.loginSuccess)
};

/**Logout Action to be dispatched */
export const logoutAction =()=>(dispatch)=>{
    removeUserFromSessionStorage();
    dispatch(authenticationSliceActions.logout())
    getToastSuccessMessage(labels?.logoutSuccess)
}
