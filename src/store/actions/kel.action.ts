import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {goapiKey, kelUrl} from "../../constants/const";

export const getKelAction = createAsyncThunk("getKec/kec", async (id) => {
  try {
    const response = await axios.get(
      `${kelUrl}?kecamatan_id=${id}&api_key=${goapiKey}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
