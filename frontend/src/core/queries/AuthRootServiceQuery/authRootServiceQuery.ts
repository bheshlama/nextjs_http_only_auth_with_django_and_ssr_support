import { createApi, fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { API_DOMAIN } from "core/consts";
// import { RootState } from "core/store/store";

interface IUserInfo {
  id: 195;
  name: "Leo";
  image_url: "";
}

export const authRootServiceApi = createApi({
  reducerPath: "authRootServiceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_DOMAIN,
    // prepareHeaders: (headers: Headers, { getState }: RootState): Headers | void => {
    //   const token = getState().auth.userToken;
    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: builder => ({
    getUserDetails: builder.query<IUserInfo, void>({
      query: () => ({
        url: "api/user/profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserDetailsQuery } = authRootServiceApi;
