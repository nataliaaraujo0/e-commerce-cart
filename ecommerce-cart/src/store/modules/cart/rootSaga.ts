import { all } from "redux-saga/effects";

import cart from "../cart/saga";

export default function* rootSaga(): Generator {
  return yield all([cart]);
}
