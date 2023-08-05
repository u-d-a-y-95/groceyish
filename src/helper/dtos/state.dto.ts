import { type } from "os";
import { IProduct } from "./product.dto";

export interface product {
  id: string;
  item: IProduct;
  count: number;
}

export interface StateType {
  cart: product[];
}

export type ActionType =
  | {
      type: "ADD_TO_CART";
      value: IProduct;
    }
  | {
      type: "REMOVE_FROM_CART";
      value: string;
    };
