"use client";

import React, { useMemo } from "react";
import { Provider } from "react-redux";
import { initializeStore, RootState } from "core/store/store";

// Note: We use Partial<RootState> here to match the type expected by initializeStore,
// which is compatible with Redux Toolkit's configureStore.

interface StoreProviderProps {
  children: React.ReactNode;
  preloadedState?: Partial<RootState>;
}

const StoreProvider = ({ children, preloadedState }: StoreProviderProps) => {
  // We use useMemo with an empty dependency array to ensure that
  // on the client, the 'store' variable (the singleton) is initialized once
  // using the server-provided preloadedState during hydration.
  const store = useMemo(() => initializeStore(preloadedState), []);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
