import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {getKecAction} from "../actions/kec.action";

interface provData {
  data: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selectedRegencyId: string | null;
}

const initialState: provData = {
  data: [],
  status: "idle",
  error: null,
  selectedRegencyId: null,
};

const subDistSlice = createSlice({
  name: "subDist",
  initialState,
  reducers: {
    setSelectedRegencyId: (state, action: PayloadAction<any>) => {
      state.selectedRegencyId = action.payload;
      state.data = [];
    },
  },
  extraReducers: (build) => {
    build.addCase(getKecAction.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
  },
});

export const {setSelectedRegencyId} = subDistSlice.actions;
export default subDistSlice.reducer;
