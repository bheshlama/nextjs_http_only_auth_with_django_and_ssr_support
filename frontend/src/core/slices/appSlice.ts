import { createSlice } from "@reduxjs/toolkit";

interface IAuthStateProps {
  isLoading: boolean;
  isAuthModalOpen: boolean;
  isAuth: boolean;
  user: {
    displayName: string;
    photoURL: string;
    [key: string]: string;
  };
}

const initialState: IAuthStateProps = {
  isLoading: false,
  isAuthModalOpen: false,
  isAuth: true,
  user: {
    displayName: "",
    photoURL: "",
  },
};

const appRootSlice = createSlice({
  name: "appRoot",
  initialState,
  reducers: {
   
  },
  extraReducers: builder => {},
});

export default appRootSlice.reducer;
