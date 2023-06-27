import { combineReducers } from "@reduxjs/toolkit";
import { API } from "../services/Api";
import { authSlice } from "./authSlice";
export const reducers = combineReducers({
  auth: authSlice.reducer,
  [API.reducerPath]: API.reducer,
});
