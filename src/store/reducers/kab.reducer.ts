import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {getKabAction} from "../actions/kab.action";

interface provData {
  data: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selectedProv: string | null;
}

const initialState: provData = {
  data: [],
  status: "idle",
  error: null,
  selectedProv: null,
};

const regencSlice = createSlice({
  name: "regency",
  initialState,
  reducers: {
    setSelectedProvId: (state, action: PayloadAction<any>) => {
      state.selectedProv = action.payload;
      state.data = [];
    },
  },
  extraReducers: (build) => {
    build.addCase(getKabAction.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
  },
});

export const {setSelectedProvId} = regencSlice.actions;
export default regencSlice.reducer;
