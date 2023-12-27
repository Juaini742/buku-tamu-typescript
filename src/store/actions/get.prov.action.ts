import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {bpsApiKey, bpsDomainUrl} from "../../constants/const";

export const getProv = createAsyncThunk<void>("getProv/prov", async () => {
  try {
    const response = await axios.get(
      `${bpsDomainUrl}/type/prov/key/${bpsApiKey}/`
    );

    const newData = response.data.data[1];

    return newData;
  } catch (error) {
    throw new Error(error as string);
  }
});
