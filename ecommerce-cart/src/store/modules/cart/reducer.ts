import { Reducer } from "redux";
import { IcartState } from "./types";

const INITIAL_STATE: IcartState = {
  items: [],
};

const cart: Reducer<IcartState> = (state, action) => {
  console.log(state, action);

  return INITIAL_STATE;
};

export default cart;
