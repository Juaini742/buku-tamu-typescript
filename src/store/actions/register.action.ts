import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

export const RegisterAction = createAsyncThunk(
  "registerAction/register",
  async (formData: RegisterFormData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/register",
        formData
      );

      alert("Success! Register");
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  }
);
