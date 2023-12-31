import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getReportAction = createAsyncThunk(
  "getReport/reoirt",
  async (token: string) => {
    try {
      const response = await axios.get("http://localhost:8080/api/invoise", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  }
);
