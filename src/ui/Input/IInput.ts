import { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement>  {
variant :  | 'Black' | 'Gray';
border: 'BorderOrange'| 'BorderBlack' | 'BorderRed' | 'BorderGray'|"BorderWhite";
}