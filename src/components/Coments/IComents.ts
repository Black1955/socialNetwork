export interface IComment {
  id: string;
  logoUrl: string;
  userName: string;
  descr: string;
  time: string;
  likes: number;
  liked: boolean;
  setLiked(): void;
}
