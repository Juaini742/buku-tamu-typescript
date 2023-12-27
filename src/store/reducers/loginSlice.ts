import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginAction, logoutAction} from "../actions/auth.action";

interface AuthState {
  token: string | null;
  errorMessage: string | null;
}

const initialState: AuthState = {
  token: null,
  errorMessage: null,
};

const authLoginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearErrorMessage: (state) => {
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      LoginAction.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.token = action.payload;
        state.errorMessage = null;
      }
    );

    builder.addCase(LoginAction.rejected, (state, action) => {
      state.token = null;
      state.errorMessage = action.payload as string;
    });

    builder.addCase(logoutAction.fulfilled, (state) => {
      state.token = null;
      state.errorMessage = null;
    });

    builder.addCase(logoutAction.rejected, (state, action) => {
      state.errorMessage = action.payload as string;
    });
  },
});

export const {clearErrorMessage} = authLoginSlice.actions;
export default authLoginSlice.reducer;
