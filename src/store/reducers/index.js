import { combineReducers } from "@reduxjs/toolkit";
import exampleSlice from "./slice/exampleSlice";

const reducers = combineReducers({
    example: exampleSlice
})

export default reducers