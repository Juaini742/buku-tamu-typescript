/* eslint-disable @typescript-eslint/no-explicit-any */
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {bpsApiKey, bpsUrl} from "../../constants/const";

interface NewsData {
  data: any;
}

export const getNews = createAsyncThunk<NewsData, void>(
  "getNews/news",
  async (domain_id) => {
    try {
      const response = await axios.get(
        `${bpsUrl}/news/domain/${domain_id}/key/${bpsApiKey}/`
      );

      const newData = response.data.data[1];

      return newData;
    } catch (error: any) {
      throw new Error(error as string);
    }
  }
);
