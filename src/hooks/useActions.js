import { bindActionCreators } from "@reduxjs/toolkit"
import {useDispatch} from "react-redux"

import actionCreators from "src/store/action-creators"

export const useActions =()=>{
    const dispatch=useDispatch();
    return bindActionCreators(actionCreators,dispatch);
}