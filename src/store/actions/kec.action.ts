import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {goapiKey, kecUrl} from "../../constants/const";

export const getKecAction = createAsyncThunk("getKel/kel", async (id) => {
  try {
    const response = await axios.get(
      `${kecUrl}?kota_id=${id}&api_key=${goapiKey}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
