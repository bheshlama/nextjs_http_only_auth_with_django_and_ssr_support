import { createSlice } from "@reduxjs/toolkit";
import {
  loadUser,
  register,
  login,
  logout,
  checkAuthStatus,
  requestRefresh,
} from "core/actions/auth";

interface IAuthStateProps {
  user: any;
  isAuthenticated: boolean;
  loading: boolean;
  register_success: boolean;
}

const initialState: IAuthStateProps = {
  user: null,
  isAuthenticated: false,
  loading: false,
  register_success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetRegisterSuccess: (state) => {
      state.register_success = false;
    },
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.register_success = true;
      state.loading = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.register_success = false;
      state.loading = false;
    });

    // Login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.isAuthenticated = false;
      state.loading = false;
    });

    // Load User
    builder.addCase(loadUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.user = action.payload ?? null;
      state.isAuthenticated = !!action.payload;
      state.loading = false;
    });
    builder.addCase(loadUser.rejected, (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    });

    // Check Auth Status
    builder.addCase(checkAuthStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(checkAuthStatus.fulfilled, (state) => {
      state.loading = false;
      state.isAuthenticated = true;
    });
    builder.addCase(checkAuthStatus.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
    });

    // Refresh Token
    builder.addCase(requestRefresh.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(requestRefresh.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(requestRefresh.rejected, (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    });

    // Logout
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.isAuthenticated = false;
    });
  },
});

export const { resetRegisterSuccess } = authSlice.actions;
export default authSlice.reducer;
