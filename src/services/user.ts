import { IReCommended } from "../ui/RecommendedBlog/IRecommended";
import { API } from "./Api";
import {
  Error,
  IUser,
  query,
  query1,
  res,
  IsearchRes,
  IUpdateProfile,
} from "./users_types";

const apiWithTag = API.enhanceEndpoints({ addTagTypes: ["user"] });

export const userAPI = apiWithTag.injectEndpoints({
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
      providesTags: ["user"],
    }),
    recomendUser: build.query<IReCommended[], number | string | undefined>({
      query: id => ({
        url: `/recomenduser/${id}`,
      }),
    }),
    subscribe: build.mutation({
      query: (id: number | string) => ({
        url: "/subscribe",
        method: "POST",
        body: { id },
      }),
      invalidatesTags: ["user"],
    }),
    unSubscribe: build.mutation({
      query: (id: number | string) => ({
        url: "/unsubscribe",
        method: "POST",
        body: { id },
      }),
      invalidatesTags: ["user"],
    }),
    findUser: build.query<IsearchRes[], string>({
      query: (text: string) => `/search?query=${text}`,
    }),
    updateProfile: build.mutation<IUser, IUpdateProfile>({
      query: ({ body }) => ({
        url: "/updateprofile",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    updatePhoto: build.mutation<string, IUpdateProfile>({
      query: ({ body }) => ({
        url: "/setphoto",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
export const {
  useSigninMutation,
  useSignupMutation,
  useGetUserQuery,
  useRefreshQuery,
  useRecomendUserQuery,
  useSubscribeMutation,
  useUnSubscribeMutation,
  useFindUserQuery,
  useUpdateProfileMutation,
  useUpdatePhotoMutation,
} = userAPI;
