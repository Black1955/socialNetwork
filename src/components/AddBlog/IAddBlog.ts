import { InputHTMLAttributes } from "react";

export interface IAddBlog extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  onClickShow?(): void;
}
