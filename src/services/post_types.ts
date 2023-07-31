export interface IrecomendPosts {
  id: string | number | undefined;
  limit: string;
  page: number;
  type: string;
}

export interface likeBody {
  post_id: number;
}

export interface likeres {
  likes: number;
}
