export interface IInput {
placeholder:string;
onChangeInput(e:React.ChangeEvent<HTMLInputElement>):void;
value:string;
variant :  | 'Black' | 'Gray';
border: 'BorderOrange'| 'BorderBlack' | 'BorderRed' | 'BorderGray'|"BorderWhite";
}