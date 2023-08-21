import {Category} from "./category";
import {Tags} from "./tags";

export  interface Pet{
    id:number,
    category:Category
    name:string,
    photoUrls:string[],
    tags:Tags[],
    status:string
}
