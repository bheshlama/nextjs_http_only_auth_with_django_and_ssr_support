import React, { ReactNode } from "react";
import type { Metadata } from "next";
// import AppHoc from "core/hocs/AppHoc";
import ReactQueryProvider from "core/context/ReactQueryProvider/ReactQueryProvider";
import StoreProvider from "core/hocs/StoreProvider";
import ThemeProviderRoot from "core/hocs/ThemeProviderRoot";
import ClientEntryRoot from "app/(clientroot)/ClientEntryRoot";

export const metadata: Metadata = {
  title: "Goldy Inventory Management",
  description: "Complete solution of Inventory Management",
  applicationName: "GOLDY INVENTORY MANAGEMENT",
  creator: "Goldy Team",
  publisher: "Goldy Team",
};

const layout = async ({ children }: { children: ReactNode }) => {
  return (
    <>
      <section>
        {/* <ReactQueryProvider>
        <StoreProvider> */}
        <ThemeProviderRoot>
          {/* <AppHoc>{children}</AppHoc> */}
          <ClientEntryRoot>{children}</ClientEntryRoot>
        </ThemeProviderRoot>
        {/* </StoreProvider>
      </ReactQueryProvider> */}
      </section>
    </>
  );
};

export default layout;
