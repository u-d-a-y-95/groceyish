"use client";

import React, { createContext, useContext, useEffect, useReducer } from "react";
import { stateReducer } from "./reducer";
import { StateType } from "@/helper/dtos/state.dto";
import { INIT_STORE } from "./actionType";

const initialState: any = {
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

  useEffect(() => {
    let data = localStorage.getItem("groceyish-cart") || false;
    if (data) {
      dispatch({
        type: INIT_STORE,
        value: JSON.parse(data) || initialState,
      });
    }
  }, []);

  useEffect(() => {
    let data = JSON.stringify(state);
    localStorage.setItem("groceyish-cart", data);
  }, [state]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
