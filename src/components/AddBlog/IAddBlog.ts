export interface  IAddBlog {
    id:string;
    icon:JSX.Element;
    type:string;
    text:string;
    onChangeAdd?(e:React.ChangeEvent<HTMLInputElement>):void;
    onKeyClick?(e:React.KeyboardEvent<HTMLInputElement>):void;
    onClickShow?():void;
}