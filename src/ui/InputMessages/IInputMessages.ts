import { InputHTMLAttributes } from "react";


export interface IInputMessages extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    onChange?():void;
    placeholder?:string;
}