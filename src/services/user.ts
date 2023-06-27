import { API } from "./Api";

interface res {
  access: boolean;
}
interface query {
  email: string;
  password: string;
}
interface query1 extends query {
  nickname: string;
}
export const userAPI = API.injectEndpoints({
  endpoints: build => ({
    signin: build.mutation<res, query>({
      query: args => ({
        url: "signin",
        method: "POST",
        body: args,
      }),
    }),
    signup: build.mutation<res, query1>({
      query: args => ({
        url: "/signup",
        method: "POST",
        body: args,
      }),
    }),
    getUser: build.query({
      query: arg => ({
        url: `/getuser/${arg}`,
      }),
    }),
  }),
});

export const { useSigninMutation, useSignupMutation, useGetUserQuery } =
  userAPI;
