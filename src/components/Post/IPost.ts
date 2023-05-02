import { IComment } from "../Coments/IComents";

export interface IPost {
  id: string;
  name: string;
  description: string;
  likes: number;
  imgUrl: string;
  time: string;
  liked: boolean;
  setLiked?(): void;
  setComented?(): void;
  comented: boolean;
  folowed: boolean;
  setFolowed?(): void;
  coments: IComment[];
}
