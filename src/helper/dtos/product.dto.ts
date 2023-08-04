import { ICategory } from "./category.dto";

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: ICategory;
  rating: number;
  url: string;
  isFeatured: boolean;
}
