"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import { useTypedDispatch, useTypedSelector } from "core/hooks";
import { useRouter } from "next/navigation";
import AppTopBarContainer from "views/containers/AppTopBarContainer/AppTopBarContainer";
import { frontendRoutes } from "core/routes/frontendRoutes";
import { checkAuthStatus, requestRefresh } from "core/actions/auth";

interface AppHocProps {
  children: ReactNode;
}

const AppHoc = ({ children }: AppHocProps) => {
  const dispatch = useTypedDispatch();
  const router = useRouter();

  const { user, isAuthenticated, loading } = useTypedSelector(
    (state) => state.authRoot
  );

  const hasCheckedAuthRef = useRef(false);

  useEffect(() => {
    if (!hasCheckedAuthRef.current && !user && !loading) {
      hasCheckedAuthRef.current = true;
      // dispatch(checkAuthStatus());
      dispatch(requestRefresh());
    }
  }, [dispatch, user, loading]);

  // Show loading while auth check is running or not yet dispatched
  if (loading || (!hasCheckedAuthRef.current && !user)) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <p>Checking authentication...</p>
      </main>
    );
  }

  // Redirect if user is not authenticated
  if (!isAuthenticated) {
    router.push(frontendRoutes.auth.login);
    return null;
  }

  // Authenticated: render children
  return (
    <main className="app-main-layout-root">
      <aside className="app-layout-content">
        <header className="app-header">
          <div className="header-content">
            <AppTopBarContainer />
          </div>
        </header>
        <section className="app-main-content flex flex-col gap-[48px] relative">
          <div className="flex gap-[10px] grow relative items-start">
            <div className="w-full max-w-[1467px] min-h-fit max-h-fit mx-auto">
              {children}
            </div>
          </div>
        </section>
      </aside>
    </main>
  );
};

export default AppHoc;
