"use client";

import React, { createContext, useContext, useReducer } from "react";
import { stateReducer } from "./reducer";
import { StateType } from "@/helper/dtos/state.dto";

const initialState: StateType = {
  cart: [],
};

export const GlobalContext = createContext<{
  state: StateType;
  dispatch: (theme: any) => void;
}>({
  state: initialState,
  dispatch: () => null,
});

export const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
