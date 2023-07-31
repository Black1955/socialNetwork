import { InputHTMLAttributes } from "react";

export interface IInputPassword extends InputHTMLAttributes<HTMLInputElement> {
  border:
    | "BorderOrange"
    | "BorderBlack"
    | "BorderRed"
    | "BorderGray"
    | "BorderWhite";
}
