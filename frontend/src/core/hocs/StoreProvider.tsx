"use client";
// import { Store } from "@reduxjs/toolkit"
import { store } from "core/store/store";
import { Provider } from "react-redux";

import React from "react";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
