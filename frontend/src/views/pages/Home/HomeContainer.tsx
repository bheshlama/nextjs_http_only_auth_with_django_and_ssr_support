"use client";

import React, { useEffect, useState } from "react";
// import { useCurrentUser } from "core/hooks/useCurrentUser";
// import { currentUser } from "core/utils/auth";
// import { useCurrentUser } from "core/hooks/useCurrentUser";

// import BillingTable from "views/containers/BillingTable/BillingTable";

const HomeContainer = () => {
  //   const user = useCurrentUser();
  // const user = await currentUser();

  // let session = useSession();

  return (
    <div className={`app-pages flex flex-col overflow-hidden`}>
      <div className="h-full p-5">
        <h1 className="font-bold text-[25px]">Home Page</h1>
        <p className="mt-2">Welcome to https only auth</p>
      </div>
    </div>
  );
};
export default HomeContainer;
