import * as types from "../actions";

export default function createPharmacyReducer(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case types.CREATE_PHARMACY_SUCCESS:
      return { ...state, ...response };
    case types.CREATE_PHARMACY_ERROR:
      return { ...state, ...response };
    default:
      return state;
  }
}
