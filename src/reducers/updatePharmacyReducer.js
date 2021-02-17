import * as types from "../actions";

export default function updatePharmacyReducer(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case types.UPDATE_PHARMACY_SUCCESS:
      return { ...state, ...response };
    case types.UPDATE_PHARMACY_ERROR:
      return { ...state, ...response };
    default:
      return state;
  }
}
