/* eslint-disable @typescript-eslint/no-explicit-any */
import {createSlice} from "@reduxjs/toolkit";
import {getProvAction} from "../actions/prov.action";

interface provData {
  data: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selectedProvId: string | null;
}

const initialState: provData = {
  data: [],
  status: "idle",
  error: null,
  selectedProvId: null,
};

const provSlice2 = createSlice({
  name: "prov",
  initialState,
  reducers: {
    setSelectedProvId(state, action) {
      state.selectedProvId = action.payload;
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProvAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProvAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getProvAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {setSelectedProvId} = provSlice2.actions;
export default provSlice2.reducer;
