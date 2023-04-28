

export interface IPost {

    id:string;
    name:string;
    description:string;
    likes:number;
    imgUrl:string;
    time:string;
    liked:boolean;
    setLiked?():boolean;

};