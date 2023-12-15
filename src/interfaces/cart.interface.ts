import { Category } from "./product.interface";

export interface Cart {
    id: string,
    image: string,
    name: string,
    category: Category,
    price: number,
    amount: number
}