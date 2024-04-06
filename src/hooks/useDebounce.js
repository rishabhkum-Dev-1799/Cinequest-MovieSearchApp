import { useCallback, useRef } from "react"

export const useDebounce = (callBackFun,delay)=>{
    const timeoutId = useRef(null);
    return useCallback((...args)=>{
        if(timeoutId.current){
            clearTimeout(timeoutId.current)
        }
        timeoutId.current = setTimeout(()=>{
            callBackFun(...args) ;
        },delay)
    },[callBackFun,delay])
}