export const frontendRoutes = {
  home: "/",
  auth: {
    login: "/auth/login",
    logout: "/auth/logout",
    register: "/auth/register",
    error: "/auth/error",
    verification: "/auth/new-verification",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
  },
  api: {
    auth: {
      user: "/api/auth/user",
      register: "/api/auth/register",
      login: "/api/auth/login",
      logout: "/api/auth/logout",
      verify: "/api/auth/verify",
      refresh: "/api/auth/refresh",
    },
  },
  dashboard: "/dashboard",
  apiAuthPrefix: "/api/auth",
  settings: "/settings",
  termsAndCondition: "/terms-and-condition",
  privacyPolicy: "/privacy-policy",
  // defaultLoginRedirect: "/home",
  defaultLoginRedirect: "/",
};

// External Links
export const externalRoutes = {
  nextjs: "https://nextjs.org/",
  w3schools: "https://www.w3schools.com/",
  ShadCn: "https://ui.shadcn.com/",
};
