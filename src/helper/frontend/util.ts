import { IProduct } from "../dtos/product.dto";

export const addToCart = (dispatch: any, obj: IProduct) => {
  dispatch({
    type: "ADD_TO_CART",
    value: obj,
  });
};
