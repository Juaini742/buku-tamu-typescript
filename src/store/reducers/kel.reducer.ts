import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {getKelAction} from "../actions/kel.action";

interface provData {
  data: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selectedSubDistId: string | null;
}

const initialState: provData = {
  data: [],
  status: "idle",
  error: null,
  selectedSubDistId: null,
};

const distSlice = createSlice({
  name: "dist",
  initialState,
  reducers: {
    setSelectedSubDistId: (state, action: PayloadAction<any>) => {
      state.selectedSubDistId = action.payload;
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getKelAction.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
  },
});

export const {setSelectedSubDistId} = distSlice.actions;
export default distSlice.reducer;
