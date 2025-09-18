import axios from "axios";
import { API_DOMAIN } from "core/consts";

// Create an axios instance with baseURL and credentials support
export const axiosInstance = axios.create({
  baseURL: API_DOMAIN,
  withCredentials: true, // Make sure cookies are included in cross-site requests
});

// Function to retrieve a specific cookie by name
// function getCookie(name) {
//   if (typeof document !== "undefined") {
//     const cookieArr = document.cookie.split(";"); // Split all cookies into an array
//     for (let i = 0; i < cookieArr.length; i++) {
//       const cookiePair = cookieArr[i].split("="); // Split individual cookie name and value
//       if (name === cookiePair[0].trim()) {
//         // Check if cookie name matches the one we're looking for
//         return decodeURIComponent(cookiePair[1]); // Return decoded cookie value
//       }
//     }
//   }
//   return null; // Return null if cookie not found
// }

// // Add CSRF token to axios instance headers
// const xsrfToken = getCookie("XSRF-TOKEN"); // Fetch the XSRF-TOKEN cookie
// console.log("xsrfToken-------------", xsrfToken);
// if (xsrfToken) {
//   axiosInstance.defaults.headers.common["X-XSRF-TOKEN"] = xsrfToken; // Set X-XSRF-TOKEN header if token exists
// }
