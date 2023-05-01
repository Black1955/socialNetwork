export interface IInputPassword {
placeholder:string;
onChangeInput(e:React.ChangeEvent<HTMLInputElement>):void;
value:string;
border: 'BorderOrange'| 'BorderBlack' | 'BorderRed' | 'BorderGray'| 'BorderWhite';
}