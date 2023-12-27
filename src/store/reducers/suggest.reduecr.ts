/* eslint-disable @typescript-eslint/no-explicit-any */
import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {DataState} from "../../constants/reducer.interfase";
import {getSuggestAction} from "../actions/suggest.action";

const initialState: DataState = {
  data: [],
  status: "idle",
  error: null,
};

const getSuggestSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addSuggest: (state, action: PayloadAction<any>) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSuggestAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSuggestAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.dates;
      })
      .addCase(getSuggestAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {addSuggest} = getSuggestSlice.actions;
export default getSuggestSlice.reducer;
