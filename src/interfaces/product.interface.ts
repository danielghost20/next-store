export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: CategoryProduct;
  images: string[];
}

export interface CategoryProduct {
  id: number;
  name: string;
  image: string;
}

export interface Categories {
  id: number;
  name: string;
  image: string;
}