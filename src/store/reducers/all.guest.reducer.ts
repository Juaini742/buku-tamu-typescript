import {createSlice} from "@reduxjs/toolkit";
import {DataState} from "../../constants/reducer.interfase";
import {getAllGuestAction} from "../actions/guest.action";

const initialState: DataState = {
  data: [],
  status: "idle",
  error: null,
};

const allGuestSlice = createSlice({
  name: "gueest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllGuestAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllGuestAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAllGuestAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default allGuestSlice.reducer;
