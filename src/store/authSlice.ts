import { createSlice } from "@reduxjs/toolkit";
import { userAPI } from "../services/user";
const initialState = {
  access: false,
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
  },
});

export default authSlice.reducer;
