import { ActionType, StateType } from "@/helper/dtos/state.dto";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionType";

export const stateReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { cart } = state;
      const found = cart.find((prod) => prod.id === action.value._id);
      if (found) {
        if (found.count < found.item.stock) {
          found.count += 1;
          return { ...state, cart };
        }
        return;
      }
      cart.push({
        item: action.value,
        id: action.value._id,
        count: 1,
      });
      return { cart };
    }

    case REMOVE_FROM_CART: {
      const { cart } = state;
      const foundIndex = cart.findIndex((prod) => prod.id === action.value);
      cart[foundIndex].count -= 1;
      if (cart[foundIndex].count < 1) {
        cart.splice(foundIndex, 1);
      }
      return { cart };
    }

    default:
      return state;
  }
};
