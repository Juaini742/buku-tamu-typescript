import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

interface LoginFormData {
  email: string;
  role: string;
  password: string;
}

interface UpdateData {
  file: string;
  username: string;
  email: string;
}

export const LoginAction = createAsyncThunk(
  "loginAction/login",
  async ({formData, navigate}: {formData: LoginFormData; navigate: any}) => {
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

      localStorage.setItem("token", data.token);
      if (data.role === "client") {
        navigate("/");
      } else if (data.role === "admin") {
        navigate("/dashboard");
      } else {
        throw new Error("Unknown role");
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

    localStorage.removeItem("token");
    Cookies.remove("refreshToken");

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

      Swal.fire({
        title: "Terima kasih!",
        text: "Profil anda telah berhasil diperbaharui",
        icon: "success",
      });

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
