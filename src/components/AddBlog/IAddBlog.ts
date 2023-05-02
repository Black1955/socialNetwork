export interface  IAddBlog {
    url:string;
    type:string;
    text:string;
    onChangeAdd(e:React.ChangeEvent<HTMLInputElement>):void;
    onClick?():void;
}