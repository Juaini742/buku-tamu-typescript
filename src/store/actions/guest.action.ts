import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

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

export const getAllGuestAction = createAsyncThunk(
  "getGuest/guest",
  async (token: {token: string}) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/guests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
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
  async ({
    formData,
    token,
    role,
  }: {
    formData: SuggestData;
    token: string;
    role: string;
  }) => {
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

      Swal.fire({
        title: "Terima kasih!",
        text: "Data Anda sudah berhasil tersimpan",
        icon: "success",
      }).then(() => {
        if (role !== "admin") {
          window.location.href = "/guest1/guest2";
        } else {
          window.location.href = "/table";
        }
      });

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// export const updateGuest = createAsyncThunk(
//   "updateGuest/guest",
//   async ({
//     token,
//     id,
//     formData,
//   }: {
//     token: string;
//     id: number;
//     formData: SuggestData;
//   }) => {
//     try {
//     } catch (error) {}
//   }
// );

export const deleteGuestsById = createAsyncThunk(
  "deleteGuest/guest",
  async ({token, dispatch, id}: {token: string; dispatch: any; id: number}) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/guests/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Swal.fire({
        title: "Apakah anda yakin?",
        text: "Jika anda menghapus data ini, maka data ini akan hilang permanen!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, hapus itu!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Terhapus!",
            text: "Data anda telah berhasil terhapus.",
            icon: "success",
          });
        }
      });
      // .then(() => {
      //   window.location.reload();
      // });

      dispatch(getAllGuestAction());

      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  }
);
