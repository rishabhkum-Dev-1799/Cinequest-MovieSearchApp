import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

/**Creating the Root Store Object*/
export const store = configureStore({
    reducer:rootReducer
})