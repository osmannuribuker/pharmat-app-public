import { takeLatest } from "redux-saga/effects";
import { registerSaga, loginSaga, currentUserSaga } from "./authenticationSaga";
import { getProductSaga } from "./productSaga";
import {
  getPharmacySaga,
  createPharmacySaga,
  updatePharmacySaga,
} from "./pharmacySaga";
import { getCitiesSaga } from "./citiesSaga";
import * as types from "../actions";
import { getStatesSaga } from "./statesSaga";
import { getMedicineStoresSaga } from "./medicineStoresSaga";
import {
  getPharmacyMSISaga,
  createPharmacyMSISaga,
  updatePharmacyMSISaga,
} from "./pharmacyMSISaga";
import { getGroupsSaga, createGroupSaga } from "./groupSaga";

export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.CURRENT_USER, currentUserSaga);
  yield takeLatest(types.GET_PRODUCT, getProductSaga);
  yield takeLatest(types.GET_PHARMACY, getPharmacySaga);
  yield takeLatest(types.GET_CITIES, getCitiesSaga);
  yield takeLatest(types.GET_STATES, getStatesSaga);
  yield takeLatest(types.CREATE_PHARMACY, createPharmacySaga);
  yield takeLatest(types.UPDATE_PHARMACY, updatePharmacySaga);
  yield takeLatest(types.GET_MEDICINE_STORES, getMedicineStoresSaga);
  yield takeLatest(types.GET_PHARMACY_MSI, getPharmacyMSISaga);
  yield takeLatest(types.CREATE_PHARMACY_MSI, createPharmacyMSISaga);
  yield takeLatest(types.UPDATE_PHARMACY_MSI, updatePharmacyMSISaga);
  yield takeLatest(types.GET_GROUPS, getGroupsSaga);
  yield takeLatest(types.CREATE_GROUP, createGroupSaga);
}
