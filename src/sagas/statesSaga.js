import { put, call } from "redux-saga/effects";

import * as types from "../actions";
import { getStatesService } from "../services/statesService";

export function* getStatesSaga(payload) {
  try {
    const response = yield call(getStatesService, payload);
    yield put({ type: types.GET_STATES_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.GET_STATES_ERROR, error });
  }
}
