import { configureStore } from "@reduxjs/toolkit";
import combinedReducer from "../Reducers/indexReducer";

const store = configureStore({reducer: combinedReducer})

export default store;