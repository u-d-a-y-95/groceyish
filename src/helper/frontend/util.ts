import { IProduct } from "../dtos/product.dto";

export const addToCart = (dispatch: any, obj: IProduct) => {
  dispatch({
    type: "ADD_TO_CART",
    value: obj,
  });
};

export const queryFromObject = (obj: Object) => {
  const keys = Object.keys(obj);
  if (keys.length < 1) return "";
  let path = "?";
  for (let index = 0; index < keys.length; index++) {
    if (Array.isArray(obj[keys[index]]) && obj[keys[index]].length > 0) {
      path += `${keys[index]}=${obj[keys[index]].join(",")}&`;
    }
    if (!Array.isArray(obj[keys[index]]) && obj[keys[index]]) {
      path += `${keys[index]}=${obj[keys[index]]}&`;
    }
  }
  return path;
};
