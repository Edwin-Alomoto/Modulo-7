import { Category } from "./Category";

export class Product{
    id!: number;
    name!: string;
    price!: number;
    description!:string;
    category!:Category;
}