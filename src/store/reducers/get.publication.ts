import {createSlice} from "@reduxjs/toolkit";
import {getPublication} from "../actions/get.publication";

const publicationSlice = createSlice({
  name: "publication",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPublication.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPublication.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getPublication.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default publicationSlice.reducer;
