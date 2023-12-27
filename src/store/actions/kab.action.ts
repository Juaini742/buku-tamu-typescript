import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {goapiKey, kabUrl} from "../../constants/const";

export const getKabAction = createAsyncThunk("getKab/kab", async (id) => {
  try {
    const response = await axios.get(
      `${kabUrl}?provinsi_id=${id}&api_key=${goapiKey}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
