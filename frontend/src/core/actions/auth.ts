import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IRegisterPayload, ILoginPayload } from "core/types/auth";
import { frontendRoutes } from "core/routes/frontendRoutes";

// Async thunks (same as your version, but with types)
export const requestRefresh = createAsyncThunk(
  "auth/requestRefresh",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(frontendRoutes.api.auth.refresh, {
        headers: {
          Accept: "application/json",
        },
        // withCredentials: true, // if your refresh cookie is httpOnly
      });

      if (res.status === 200) {
        // Dispatch checkAuthStatus to reload user info
        await thunkAPI.dispatch(checkAuthStatus());
        return { success: true };
      } else {
        return thunkAPI.rejectWithValue("Refresh failed");
      }
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.error || "Refresh failed"
      );
    }
  }
);

export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(frontendRoutes.api.auth.user, {
        // withCredentials: true, // ✅ ensures cookies (access token) are sent
        headers: {
          Accept: "application/json",
        },
      });

      if (res.status === 200) {
        return res.data.user; // ✅ only return user object
      }

      return thunkAPI.rejectWithValue("Failed to load user");
    } catch (err: any) {
      if (err.response) {
        return thunkAPI.rejectWithValue(
          err.response.data?.error ?? "Failed to load user"
        );
      }
      return thunkAPI.rejectWithValue(err.message ?? "Unexpected error");
    }
  }
);

export const checkAuthStatus = createAsyncThunk(
  "auth/checkAuthStatus",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(frontendRoutes.api.auth.verify, {
        // withCredentials: true, // sends httpOnly cookies
        headers: { Accept: "application/json" },
      });

      if (res.status === 200) {
        await thunkAPI.dispatch(loadUser());
        return true; // we'll set isAuthenticated = true in reducer
      } else {
        return thunkAPI.rejectWithValue(null);
      }
    } catch {
      return thunkAPI.rejectWithValue(null);
    }
  }
);

export const register = createAsyncThunk(
  "/auth/register",
  async (payload: IRegisterPayload, thunkAPI) => {
    try {
      // Call Next.js App Router route
      const res = await axios.post(frontendRoutes.api.auth.register, payload, {
        // withCredentials: true, // ✅ allows cookies if backend sets any
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (res.status === 201 || res.status === 200) {
        return {
          success: res.data?.success ?? true,
        };
      }

      return thunkAPI.rejectWithValue({
        error: res.data?.error ?? "Registration failed",
        status: res.status,
      });
    } catch (err: any) {
      if (err.response) {
        return thunkAPI.rejectWithValue({
          error: err.response.data?.error ?? "Registration failed",
          status: err.response.status,
        });
      } else if (err.request) {
        return thunkAPI.rejectWithValue({
          error: "No response from server",
          status: 500,
        });
      } else {
        return thunkAPI.rejectWithValue({
          error: err.message ?? "Unexpected error occurred",
          status: 500,
        });
      }
    }
  }
);

export const login = createAsyncThunk(
  "/auth/login",
  async (payload: ILoginPayload, thunkAPI) => {
    try {
      // Call Next.js App Router route
      const res = await axios.post(frontendRoutes.api.auth.login, payload, {
        // withCredentials: true, // ✅ allows httpOnly cookies to be set
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (res.status === 200) {
        await thunkAPI.dispatch(loadUser());
        return {
          success: res.data?.success ?? "Logged in successfully",
        };
      }

      return thunkAPI.rejectWithValue({
        error: res.data?.error ?? "Authentication failed",
        status: res.status,
      });
    } catch (err: any) {
      if (err.response) {
        return thunkAPI.rejectWithValue({
          error: err.response.data?.error ?? "Invalid credentials",
          status: err.response.status,
        });
      } else if (err.request) {
        return thunkAPI.rejectWithValue({
          error: "No response from server",
          status: 500,
        });
      } else {
        return thunkAPI.rejectWithValue({
          error: err.message ?? "Unexpected error",
          status: 500,
        });
      }
    }
  }
);

export const logout = createAsyncThunk("/auth/logout", async (_, thunkAPI) => {
  try {
    // Call Next.js App Router logout route
    const res = await axios.post(
      frontendRoutes.api.auth.logout,
      {},
      {
        // withCredentials: true, // browser will send cookies if needed
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (res.status === 200) {
      return { success: true };
    }

    return thunkAPI.rejectWithValue("Logout failed");
  } catch (err: any) {
    if (err.response) {
      return thunkAPI.rejectWithValue(
        err.response.data?.error || "Logout failed"
      );
    } else if (err.request) {
      return thunkAPI.rejectWithValue("No response from server");
    } else {
      return thunkAPI.rejectWithValue(err.message || "Unexpected error");
    }
  }
});
