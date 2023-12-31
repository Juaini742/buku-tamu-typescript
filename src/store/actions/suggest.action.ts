import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

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

      Swal.fire({
        title: "Terima kasih!",
        text: "Pesan anda sudah kami terima, senang anda ikut perpartisipasi dalam kemajuan kantor BPS",
        icon: "success",
      }).then(() => {
        window.location.reload();
      });

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
