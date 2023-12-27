import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

interface LoginFormData {
  email: string;
  password: string;
}

interface UpdateData {
  file: string;
  username: string;
  email: string;
}

export const LoginAction = createAsyncThunk(
  "loginAction/login",
  async (formData: {formData: LoginFormData}) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        formData,
        {withCredentials: true}
      );

      const data = response.data;

      if (!data) {
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const logoutAction = createAsyncThunk("auth/logout", async (token) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/logout",
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    window.location.href = "/login";
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
});

export const getUserByToken = createAsyncThunk(
  "getUser/user",
  async (token) => {
    try {
      const response = await axios.get("http://localhost:8080/api/userToken", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data.user;

      return data;
    } catch (error) {
      throw new Error(error as string);
    }
  }
);

export const updateUserAction = createAsyncThunk(
  "updateUser/updateUser",
  async ({
    formData,
    id,
    token,
  }: {
    formData: UpdateData;
    id: number;
    token: string;
  }) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/users/${id}`,
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
