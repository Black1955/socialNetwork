import { IUser } from "./../services/users_types";
import { createSlice } from "@reduxjs/toolkit";
import { userAPI } from "../services/user";

interface IInitialState {
  access: boolean;
  user: IUser | null;
}
const initialState: IInitialState = {
  access: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      userAPI.endpoints.signin.matchFulfilled,
      (state, payload) => {
        state.access = payload.payload.access;
      }
    );
    builder.addMatcher(userAPI.endpoints.signin.matchRejected, state => {
      state.access = false;
    });
    builder.addMatcher(
      userAPI.endpoints.signup.matchFulfilled,
      (state, payload) => {
        state.access = payload.payload.access;
      }
    );
    builder.addMatcher(userAPI.endpoints.signup.matchRejected, state => {
      state.access = false;
    });
    builder.addMatcher(
      userAPI.endpoints.refresh.matchFulfilled,
      (state, payload) => {
        state.user = payload.payload;
      }
    );
  },
});

export default authSlice.reducer;
