import { ButtonHTMLAttributes } from "react";
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
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
