import { IComment } from "../Coments/IComents";

export interface IPost {
  id: number;
  title: string;
  description: string;
  likes: number;
  img_url: string;
  time: string;
  liked: boolean;
  setLiked?(): void;
  setComented?(): void;
  comented: boolean;
  folowed: boolean;
  setFolowed?(): void;
  userId: number;
  coments: IComment[];
}
