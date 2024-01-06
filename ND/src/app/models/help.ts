import {User} from "./user";

export interface Help {
    id?: number;
    title:string;
    body:string;
    isStillNeeded?:boolean;
    author?:User;
    comments?:Comment;
    media?:string;

}
