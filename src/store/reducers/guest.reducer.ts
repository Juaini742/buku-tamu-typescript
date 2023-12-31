import {createSlice} from "@reduxjs/toolkit";
import {DataState} from "../../constants/reducer.interfase";
import {getGuestAction, postGuestAction} from "../actions/guest.action";

const initialState: DataState = {
  data: [],
  status: "idle",
  error: null,
  loading: false,
};

const guestSlice = createSlice({
  name: "guest",
  initialState,
  reducers: {
    addGuest: (state, action) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postGuestAction.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(postGuestAction.fulfilled, (state) => {
        state.status = "succeeded";
        state.loading = false;
      })
      .addCase(getGuestAction.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(getGuestAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getGuestAction.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const {addGuest} = guestSlice.actions;
export default guestSlice.reducer;
