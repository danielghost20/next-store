

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
}

export interface Category {
  name: string,
  color: string
}