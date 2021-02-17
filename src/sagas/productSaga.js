import { put, call } from "redux-saga/effects";

import * as types from "../actions";
import { getProductService } from "../services/productService";

export function* getProductSaga(payload) {
  try {
    const response = yield call(getProductService, payload);
    yield put({ type: types.GET_PRODUCT_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.GET_PRODUCT_ERROR, error });
  }
}
