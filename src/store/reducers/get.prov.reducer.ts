import {createSlice} from "@reduxjs/toolkit";
import {getProv} from "../actions/get.prov.action";

const provSlice = createSlice({
  name: "prov",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProv.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProv.fulfilled, (state, action) => {
      state.status = "seccess";
      state.data = action.payload;
    });
    builder.addCase(getProv.rejected, (state, action) => {
      state.status = "seccess";
      state.error = action.error.message;
    });
  },
});

export default provSlice.reducer;
