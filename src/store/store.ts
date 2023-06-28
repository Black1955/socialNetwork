import { configureStore } from "@reduxjs/toolkit";
import { API } from "../services/Api";
import { reducers } from "./reducers";
export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(API.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
