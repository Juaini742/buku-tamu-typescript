import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {bpsApiKey, bpsUrl} from "../../constants/const";

export const getPublication = createAsyncThunk(
  "getPublication/publication",
  async (id) => {
    try {
      const response = await axios.get(
        `${bpsUrl}/publication/lang/ind/domain/${id}/key/${bpsApiKey}/`
      );

      const newData = response.data.data[1];

      return newData;
    } catch (error) {
      throw new Error(error as string);
    }
  }
);
