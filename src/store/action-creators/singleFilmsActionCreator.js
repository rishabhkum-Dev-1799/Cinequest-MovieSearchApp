import axios from "axios";

import { singleFilmActions } from "../reducers/singleFilmSlice";
import { OMDB_API_URL } from "src/constants";

export const getFilmById = (id)=> async(dispatch) => {
    /**Setting the dispatch for loading the films */
    dispatch(singleFilmActions.isFilmLoading());
     /**Fetching the singlefilm from the API */
    const responseObj = await axios.get(`${OMDB_API_URL}/?apikey=${OMBD_API_KEY}`,{
        params:{i:id,plot:"full"}
    });
     /**Dispatching the Actions if the API Request Has Errors */
    if (responseObj.data.Error){
        dispatch(singleFilmActions.getFilmError(responseObj.data.Error));
        return;
    }
     /**Dispatching the Actions if the API Request is SuccessFull */
    dispatch(singleFilmActions.getFilmSuccess(responseObj.data));
}
