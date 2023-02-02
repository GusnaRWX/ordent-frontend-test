import { combineReducers } from "@reduxjs/toolkit";
import exampleSlice from "./slice/exampleSlice";
import albumSlice from "./slice/albumSlice";
import userSlice from "./slice/userSlice";
import photoSlice from "./slice/photoSlice";

const reducers = combineReducers({
    example: exampleSlice,
    albumn: albumSlice,
    user: userSlice,
    photo: photoSlice
})

export default reducers