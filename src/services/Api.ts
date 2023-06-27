import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import "dotenv";
export const API = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API_HOSTNAME,
    credentials: "include",
  }),
  endpoints: () => ({}),
});
