export interface  IAddBlog {
    id:string;
    url:string;
    type:string;
    text:string;
    onChangeAdd?(e:React.ChangeEvent<HTMLInputElement>):void;
    onKeyClick?(e:React.KeyboardEvent<HTMLInputElement>):void;
    onClickShow?():void;
}