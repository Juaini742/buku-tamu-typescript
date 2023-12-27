import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

interface SuggestData {
  name: string;
  description: Text;
}

export const getSuggestAction = createAsyncThunk(
  "getSuggest/suggest",
  async ({id, token}: {id: number; token: string}) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/critics/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const postSuggestAction = createAsyncThunk(
  "postSuggest/suggest",
  async ({
    formData,
    token,
    dispatch,
  }: {
    formData: SuggestData;
    token: string;
    dispatch: any;
  }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/critics",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("oke");

      dispatch(getSuggestAction);

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
