import {PayloadAction, createSlice} from "@reduxjs/toolkit";
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

const newProvSlice = createSlice({
  name: "prov2",
  initialState,
  reducers: {
    setSelectedProvId: (state, action: PayloadAction<any>) => {
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
export const {setSelectedProvId} = newProvSlice.actions;
export default newProvSlice.reducer;
