import { MouseEventHandler } from "react";
export interface IButton {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant:
    | "Orange"
    | "Black"
    | "BorderBlack"
    | "BorderOrange"
    | "Gray"
    | "Icon"
    | "WithoutBorder";
  icon?: JSX.Element;
}
