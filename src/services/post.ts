import { API } from "./Api";
import { IPost } from "../components/Post/IPost";
import { IrecomendPosts, likeBody, likeres } from "./post_types";

export const userAPI = API.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query<IPost[], IrecomendPosts>({
      query: ({ id, limit, page, type }) => ({
        url: `/posts/recomendposts/${id}?limit=${limit}&page=${page}&type=${type}`,
      }),
    }),
    likePost: build.mutation<likeres, likeBody>({
      query: body => ({
        url: "/posts/like",
        method: "POST",
        body: body,
      }),
    }),
    disLikePost: build.mutation<likeres, likeBody>({
      query: body => ({
        url: "/posts/dislike",
        method: "POST",
        body: body,
      }),
    }),
    createPost: build.mutation({
      query: body => ({
        url: "/posts/create",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useLazyGetPostsQuery,
  useLikePostMutation,
  useDisLikePostMutation,
  useCreatePostMutation,
} = userAPI;
