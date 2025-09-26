import type { Metadata } from "next";
import "./globals.css";
import "assets/styles/main.scss";
import { Inter } from "next/font/google";
import ReactQueryProvider from "core/context/ReactQueryProvider/ReactQueryProvider";
import StoreProvider from "core/hocs/StoreProvider";
import { initializeStore } from "core/store/store";
import { checkAuthStatus } from "core/actions/auth";
// import { SessionProvider } from "next-auth/react";
// import { auth } from "../auth/auth";

// When loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"], display: "swap" });

// const poppins = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-poppins",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export const metadata: Metadata = {
  title: "Goldy Inventory Management",
  description: "Complete solution of Inventory Management",
  applicationName: "GOLDY INVENTORY MANAGEMENT",
  creator: "Goldy Team",
  publisher: "Goldy Team",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await auth();

  const store = initializeStore();
  await store.dispatch(checkAuthStatus());
  const preloadedState = store.getState();
  return (
    // <SessionProvider session={session}>
    <html lang="en" className={inter.className}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> */}
      {/* <link rel="preconnect" href="https://firebase.googleapis.com" /> study how this is working */}
      {/* <link rel="preconnect" href="https://api.sharebigya.com" /> study how this is working */}
      {/* <link rel="preload" as="font"></link> */}
      <body>
        <ReactQueryProvider>
          <StoreProvider preloadedState={preloadedState}>
            {children}
          </StoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
    // </SessionProvider>
  );
}
