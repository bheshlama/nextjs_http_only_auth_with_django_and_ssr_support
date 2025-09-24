"use client";

import React, { useMemo } from "react";
import { Provider } from "react-redux";
import { initializeStore } from "core/store/store";
import { DeepPartial } from "lib/utils";
import { TRootState } from "core/store/store";

interface StoreProviderProps {
  children: React.ReactNode;
  preloadedState?: DeepPartial<TRootState>;
}

const StoreProvider = ({ children, preloadedState }: StoreProviderProps) => {
  const store = useMemo(
    () => initializeStore(preloadedState),
    [preloadedState]
  );
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
