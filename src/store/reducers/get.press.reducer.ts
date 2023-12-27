import {createSlice} from "@reduxjs/toolkit";
import {getPress} from "../actions/get.press";
import {DataState} from "../../constants/reducer.interfase";

const initialState: DataState = {
  data: [],
  status: "idle",
  error: null,
};

const PressReleaseSlice = createSlice({
  name: "publication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPress.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getPress.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default PressReleaseSlice.reducer;
