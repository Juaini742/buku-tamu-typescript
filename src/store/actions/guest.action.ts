import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

interface SuggestData {
  name: string;
  bord: string;
  age: number;
  ktp: number;
  phone: number;
  prov: number;
  kab: number;
  kec: number;
  kel: number;
  educate: string;
  address: string;
  data: string;
  file: string;
}

export const getGuestAction = createAsyncThunk(
  "getGuest/guest",
  async ({user_id, token}: {user_id: number; token: string}) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/guests/${user_id}`,
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

export const postGuestAction = createAsyncThunk(
  "postSuggest/suggest",
  async ({formData, token}: {formData: SuggestData; token: string}) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/guests/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("oke");

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
