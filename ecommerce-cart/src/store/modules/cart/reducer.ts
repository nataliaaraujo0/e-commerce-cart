import { Reducer } from "redux";
import { IcartState } from "./types";

const cart: Reducer<IcartState> = () => {
  return {
    items: [],
  };
};

export default cart;
