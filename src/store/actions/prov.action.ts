import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {goapiKey, provUrl} from "../../constants/const";

export const getProvAction = createAsyncThunk("getProv/prov", async () => {
  try {
    const response = await axios.get(`${provUrl}?api_key=${goapiKey}`);

    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
