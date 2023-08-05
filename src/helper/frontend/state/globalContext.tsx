"use client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";

interface product {
  id: string;
  item: object;
  count: number;
}

type StateType = {
  cart: product[];
};

type ActionType = {
  type: string;
  value?: {
    id: string;
  };
};

const initialState: StateType = {
  cart: [],
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { cart } = state;
      const found = cart.find((prod) => prod.id === action.value?.id);
      if (found) {
        found.count += 1;
        return { ...state, cart };
      }
      cart.push({
        item: action.value || {},
        id: action.value?.id || "",
        count: 1,
      });
      return { cart };

    default:
      return state;
  }
};

export const GlobalContext = createContext<{
  state: StateType;
  dispatch: (theme: any) => void;
}>({
  state: initialState,
  dispatch: () => null,
});

export const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
