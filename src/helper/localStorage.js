import { LATEST_SEARCH_QUERY, LOGGED_IN_USER_KEY, WATCHLIST_DB } from "src/constants";

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

/**
 * 
 * @param {object} data 
 * @returns This function will return the watchlist data from the local storage
 */
export const getWatchListDetailsFromLocalStorage=(data)=>{
    const watchListData = localStorage.getItem(WATCHLIST_DB);
    return watchListData? JSON.parse(watchListData) :null
}


/**
 * 
 * @param {object} data 
 * @returns This function will update the watchlist data into the local storage
 */
export const updateWatchListDetailsInLocalStorage=(data)=>{
    const stringifiedData=JSON.stringify(data);
    localStorage.setItem(WATCHLIST_DB,stringifiedData)
}

/**
 * 
 * @param {string} searchQuery 
 * @returns This function will update the search query in the local storage
 */
export const updateLocalStorageSearchQuery=(searchQuery)=>{
    localStorage.setItem(LATEST_SEARCH_QUERY,searchQuery)
}

/**
 * 
 * @returns This function will return the search query from the local storage
 
 */
export const getSearchQueryFromLocalStorage=()=>{
    const searchQuery = localStorage.getItem(LATEST_SEARCH_QUERY);
    if(!searchQuery){
        return "John Wick"
    }
    return searchQuery
}