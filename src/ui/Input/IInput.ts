export interface IInput {
placeholder:string;
onChangeInput?():void;
value:string;
variant :  | 'Black' | 'Gray';
border?: 'BorderOrange'| 'BorderBlack' | 'BorderRed' | 'BorderGray'|"BorderWhite";
}