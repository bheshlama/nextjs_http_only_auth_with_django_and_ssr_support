"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

const ThemeProviderRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderRoot;
