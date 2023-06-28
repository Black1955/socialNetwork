import { API } from "./Api";
import { IPost } from "../components/Post/IPost";
interface IrecomendPosts {
  id: string | number | undefined;
  limit: string;
  page: string;
  type: string;
}

export const userAPI = API.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query<IPost[], IrecomendPosts>({
      query: ({ id, limit, page, type }) => ({
        url: `/posts/recomendposts/${id}?limit=${limit}&page=${page}&type=${type}`,
      }),
    }),
  }),
});

export const { useGetPostsQuery } = userAPI;
