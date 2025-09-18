"use client";

import AppHoc from "core/hocs/AppHoc";
import { ReactNode } from "react";

const ClientEntryRoot = ({ children }: { children: ReactNode }) => {
  return <AppHoc>{children}</AppHoc>;
};

export default ClientEntryRoot;
