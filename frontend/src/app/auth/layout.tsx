import React from "react";
import Image from "next/image";
import AppTopBarContainer from "views/containers/AppTopBarContainer/AppTopBarContainer";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  // TODO: Later we will get this image from store
  const imageUrl =
    "https://static.vecteezy.com/system/resources/previews/030/468/049/large_2x/golden-currency-world-finance-and-3d-gold-bars-symbolize-global-investment-vertical-mobile-wallpaper-ai-generated-free-photo.jpg";

  return (
    <div>
      <AppTopBarContainer />
      <div className="flex items-center w-full rounded-lg">
        {children}
        <div
          className="flex items-center justify-center w-6/12 h-[100vh] bg-slate-100"
          style={{
            background: `url(${imageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default AuthLayout;
