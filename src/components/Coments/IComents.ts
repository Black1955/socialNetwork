export interface IComment{
    logoUrl?:string;
    userName?:string;
    descr?:string;
    time?:string;
    likes?:number;
    liked?:boolean;
    setLiked():void;

}