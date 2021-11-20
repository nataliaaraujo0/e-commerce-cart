import { all, takeLatest } from "redux-saga/effects";
import { addProductToCart } from "./actions";

type CheckProductStockRequest = ReturnType<typeof addProductToCart>;

function checkProductStock({ payload }: CheckProductStockRequest) {
  console.log(payload);
}

export default all([takeLatest("ADD_PRODUCT_TO_CART", checkProductStock)]);
