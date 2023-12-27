import {createSlice} from "@reduxjs/toolkit";
import {getDetailsNews} from "../actions/get.detail.news.action";

const newsDetailSLice = createSlice({
  name: "news",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetailsNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDetailsNews.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getDetailsNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default newsDetailSLice.reducer;
