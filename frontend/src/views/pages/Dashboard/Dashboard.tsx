"use client";

import { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "core/hooks";
import { useRouter } from "next/navigation";
import { frontendRoutes } from "core/routes/frontendRoutes";

export default function Dashboard() {
  const dispatch = useTypedDispatch();
  const router = useRouter();
  const { user, isAuthenticated, loading } = useTypedSelector(
    (state) => state.authRoot
  );

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push(frontendRoutes.auth.login);
    }
  }, [loading, isAuthenticated, router]);

  return (
    <div className="h-full p-5">
      <h1 className="font-bold text-[25px]">Dashboard :)</h1>
      <p className="mt-2">
        Welcome {user?.first_name ?? "Guest"} to HTTP-only Auth!
      </p>
    </div>
  );
}
