import { frontendRoutes } from "core/routes/frontendRoutes";
// Nav List
export const AUTH_NAV_LIST = [
  {
    id: "GIM0",
    title: "Home",
    link: frontendRoutes.home,
  },
    {
    id: "GIM1",
    title: "Logout",
    link: frontendRoutes.auth.logout,
  },
];

export const GUEST_NAV_LIST = [
  {
    id: "GIM0",
    title: "Home",
    link: frontendRoutes.home,
  },
  {
    id: "GIM1",
    title: "Register",
    link: frontendRoutes.auth.register,
  },
  {
    id: "GIM2",
    title: "Login",
    link: frontendRoutes.auth.login,
  },
];

// FORM FIELDS
export const REGISTER_FORM_FIELDS = [
  { id: "GIM1", name: "first_name", label: "First Name", type: "text" },
  { id: "GIM2", name: "last_name", label: "Last Name", type: "text" },
  { id: "GIM3", name: "username", label: "Username", type: "text" },
  { id: "GIM4", name: "password", label: "Password", type: "password" },
  {
    id: "GIM5",
    name: "re_password",
    label: "Confirm Password",
    type: "password",
  },
];

export const LOGIN_FORM_FIELDS = [
  { id: "GIM3", name: "username", label: "Username", type: "text" },
  { id: "GIM4", name: "password", label: "Password", type: "password" },
];
