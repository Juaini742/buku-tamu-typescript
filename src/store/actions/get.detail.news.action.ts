import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {bpsApiKey, bpsUrl} from "../../constants/const";

export const getDetailsNews = createAsyncThunk(
  "getDetailsNews/detailsNews",
  async (id) => {
    try {
      const responses = await axios.get(
        `${bpsUrl}/statictable/lang/ind/id/${id}/key/${bpsApiKey}/`
      );

      const newData = responses.data.data;

      return newData;
    } catch (error) {
      throw new Error(error as string);
    }
  }
);
