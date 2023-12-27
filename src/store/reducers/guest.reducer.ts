import {createSlice} from "@reduxjs/toolkit";
import {DataState} from "../../constants/reducer.interfase";
import {getGuestAction} from "../actions/guest.action";

const initialState: DataState = {
  data: [],
  status: "idle",
  error: null,
};

const guestSlice = createSlice({
  name: "gueest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGuestAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getGuestAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.guest;
      })
      .addCase(getGuestAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default guestSlice.reducer;
