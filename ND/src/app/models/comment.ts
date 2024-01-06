import {User} from "./user";

export interface Comment{
    id: String
    text: String
    author: User;
    postId: number;
    userId: number;
}
