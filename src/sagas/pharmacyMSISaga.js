import { put, call } from "redux-saga/effects";

import * as types from "../actions";
import {
  getPharmacyMSIService,
  createPharmacyMSIService,
  updatePharmacyMSIService,
} from "../services/pharmacyMSIService";

export function* getPharmacyMSISaga(payload) {
  try {
    const response = yield call(getPharmacyMSIService, payload);
    if (response) {
      payload.success();
    }
    yield put({ type: types.GET_PHARMACY_MSI_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.GET_PHARMACY_MSI_ERROR, error });
  }
}

export function* createPharmacyMSISaga(payload) {
  try {
    const response = yield call(createPharmacyMSIService, payload);
    if (response) {
      payload.success();
    }
    yield put({ type: types.CREATE_PHARMACY_MSI_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.CREATE_PHARMACY_MSI_ERROR, error });
    payload.error();
  }
}

export function* updatePharmacyMSISaga(payload) {
  try {
    const response = yield call(updatePharmacyMSIService, payload);
    if (response) {
      payload.success();
    }
    yield put({ type: types.UPDATE_PHARMACY_MSI_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.UPDATE_PHARMACY_MSI_ERROR, error });
    payload.error();
  }
}
