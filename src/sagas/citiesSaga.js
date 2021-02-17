import { put, call } from "redux-saga/effects";

import * as types from "../actions";
import { getCitiesService } from "../services/citiesService";

export function* getCitiesSaga(payload) {
  try {
    const response = yield call(getCitiesService);
    yield put({ type: types.GET_CITIES_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.GET_CITIES_ERROR, error });
  }
}
