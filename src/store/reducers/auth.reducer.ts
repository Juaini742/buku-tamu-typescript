/* eslint-disable @typescript-eslint/no-explicit-any */
import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {DataState} from "../../constants/reducer.interfase";
import {getUserByToken} from "../actions/auth.action";

const initialState: DataState = {
  data: [],
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuth: (state, action: PayloadAction<any>) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserByToken.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserByToken.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getUserByToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {addAuth} = authSlice.actions;
export default authSlice.reducer;
