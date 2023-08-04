import { ICategory } from "./category.dto";

export interface IProduct {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: ICategory;
  rating: number;
  url: string;
  isFeatured: boolean;
}
