import { put, call } from "redux-saga/effects";

import * as types from "../actions";
import { getMedicineStoresService } from "../services/medicineStoresService";

export function* getMedicineStoresSaga() {
  try {
    const response = yield call(getMedicineStoresService);
    yield put({ type: types.GET_MEDICINE_STORES_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.GET_MEDICINE_STORES, error });
  }
}
