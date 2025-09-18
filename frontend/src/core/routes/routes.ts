// An array of routes that are accessible to the public
// These routes do not require authentication
// @type {string[]}
import { frontendRoutes } from "core/routes/frontendRoutes";

export const publicRoutes = [
  // frontendRoutes.home,
  frontendRoutes.termsAndCondition,
  frontendRoutes.privacyPolicy,
  frontendRoutes.auth.login,
  frontendRoutes.auth.register,
  frontendRoutes.auth.error,
  frontendRoutes.auth.verification,
  frontendRoutes.auth.forgotPassword,
  frontendRoutes.auth.resetPassword,
];

// An array of routes that are used for authentication
// These routes will redirect logged in users to /settings
// @type {string[]}

export const authRoutes = [
  frontendRoutes.auth.login,
  frontendRoutes.auth.register,
  frontendRoutes.auth.error,
  frontendRoutes.auth.verification,
  frontendRoutes.auth.forgotPassword,
  frontendRoutes.auth.resetPassword,
];

// The prefix for API authentication routes
// Routes that start with this prefix are used for API authentication purposes
// @type {string}
export const apiAuthPrefix = frontendRoutes.apiAuthPrefix;

// The default redirect path after logging in
// @type {string}
export const DEFAULT_LOGIN_REDIRECT = frontendRoutes.defaultLoginRedirect;
