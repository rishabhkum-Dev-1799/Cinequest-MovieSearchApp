import { LOGGED_IN_USER_KEY } from "src/constants";

/**
 * 
 * @param {Object} data 
 * @returns This function will update the user data in the session storage
 */
export const insertUserInSessionStorage=(data)=>{
    const stringifiedData=JSON.stringify(data);
    sessionStorage.setItem(LOGGED_IN_USER_KEY,stringifiedData)
}


/**
 * @returns This function will return the user Data from the session storage
 */
export const removeUserFromSessionStorage=()=>{
    sessionStorage.removeItem(LOGGED_IN_USER_KEY)
}

/** 
 * @returns This function will return the user Data from the session storage
 */
export const getUserFromSessionStorage=()=>{
    const userData=sessionStorage.getItem(LOGGED_IN_USER_KEY);
    return userData?JSON.parse(userData):null;
}