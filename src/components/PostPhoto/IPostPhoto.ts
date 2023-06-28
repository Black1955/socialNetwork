import { IComment } from "../Coments/IComents";

export interface IPostPhoto {
  id: number;
  name: string;
  likes: number;
  title: string;
  subtitle: string;
  time: string;
  liked: boolean;
  setLiked(): void;
  setComented(): void;
  comented: boolean;
  folowed: boolean;
  setFolowed?(): void;
  coments: IComment[];
  saved: boolean;
  setSaved(): void;
}
