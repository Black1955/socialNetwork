import { API } from "./Api";

interface res {
  access: boolean;
}
interface query {
  email: string;
  password: string;
}
export interface IUser {
  name: string;
  nickame: string;
  id: number;
  description: string;
  followers: number;
  following: number;
  avatar_url: string;
  back_url: string;
  email: string;
}
interface Error {}
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
    refresh: build.query<IUser, Error>({
      query: () => "/refresh",
    }),
    getUser: build.query({
      query: arg => ({
        url: `/getuser/${arg}`,
      }),
    }),
    recomendUser: build.query({
      query: id => ({
        url: `/recomenduser/${id}`,
      }),
    }),
  }),
});

export const {
  useSigninMutation,
  useSignupMutation,
  useGetUserQuery,
  useRefreshQuery,
  useRecomendUserQuery,
} = userAPI;
