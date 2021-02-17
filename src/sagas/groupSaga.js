import { put, call } from "redux-saga/effects";
import { getGroupsService, createGroupService } from "../services/groupService";
import * as types from "../actions";

export function* getGroupsSaga(payload) {
  try {
    const response = yield call(getGroupsService, payload);
    if (response) {
      payload.success(response);
    }
    yield put({ type: types.GET_GROUPS_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.GET_GROUPS_ERROR, error });
  }
}

export function* createGroupSaga(payload) {
  try {
    const response = yield call(createGroupService, payload);
    if (response) {
      payload.success();
    }
    yield put({ type: types.CREATE_GROUP_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.CREATE_GROUP_ERROR, error });
    payload.error();
  }
}
