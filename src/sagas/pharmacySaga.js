import { put, call } from "redux-saga/effects";
import {
  createPharmacyService,
  getPharmacyService,
  updatePharmacyService,
} from "../services/pharmacyService";
import * as types from "../actions";

export function* getPharmacySaga(payload) {
  try {
    const response = yield call(getPharmacyService, payload);
    yield put({ type: types.GET_PHARMACY_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.GET_PHARMACY_ERROR, error });
  }
}

export function* createPharmacySaga(payload) {
  try {
    const response = yield call(createPharmacyService, payload);
    if (response) {
      payload.success();
    }
    yield put({ type: types.CREATE_PHARMACY_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.CREATE_PHARMACY_ERROR, error });
    payload.error();
  }
}

export function* updatePharmacySaga(payload) {
  try {
    const response = yield call(updatePharmacyService, payload);
    if (response) {
      payload.success();
    }
    yield put({ type: types.UPDATE_PHARMACY_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.UPDATE_PHARMACY_ERROR, error });
    payload.error();
  }
}
