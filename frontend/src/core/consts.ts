// Env Variables Defination
export const LOCAL_BASE_DOMAIN = process.env.NEXT_PUBLIC_LOCAL_BASE_DOMAIN;
// export const API_DOMAIN = process.env.NEXT_PUBLIC_BASE_DOMAIN;
export const API_DOMAIN = process.env.NEXT_PUBLIC_BASE_DOMAIN;

// Modes
export const THEME_MODE_LIGHT = "light";
export const THEME_MODE_DARK = "dark";

// export const APP_LOGO = "@/assets";
export const MAILING_ID = process.env.NEXT_PUBLIC_MAILING_ID;

// File Types
export const FILE_TYPE_JPEG = "image/jpeg";
export const FILE_TYPE_PNG = "image/png";
export const FILE_TYPE_PDF = "application/pdf";

// --------------------------------------------------------------------------------

// Endpoint Status
export const STATUS_FULFILLED = "fulfilled";
export const STATUS_PENDING = "pending";

// Register 
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const RESET_REGISTER_SUCCESS = "RESET_REGISTER_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAIL = "LOAD_USER_FAIL";
export const AUTHENTICATED_SUCCESS = "AUTHENTICATED_SUCCESS";
export const AUTHENTICATED_FAIL = "AUTHENTICATED_FAIL";
export const REFRESH_SUCCESS = "REFRESH_SUCCESS";
export const REFRESH_FAIL = "REFRESH_FAIL";
export const SET_AUTH_LOADING = "SET_AUTH_LOADING";
export const REMOVE_AUTH_LOADING = "REMOVE_AUTH_LOADING";