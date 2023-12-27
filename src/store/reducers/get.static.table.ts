import {createSlice} from "@reduxjs/toolkit";
import {getStaticTable} from "../actions/get.static.table";

const staticSlice = createSlice({
  name: "static",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStaticTable.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getStaticTable.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getStaticTable.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default staticSlice.reducer;
