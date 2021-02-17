import * as types from "../actions";

export default function createPharmacyMSIReducer(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case types.CREATE_PHARMACY_MSI_SUCCESS:
      return { ...state, ...response };
    case types.CREATE_PHARMACY_MSI_ERROR:
      return { ...state, ...response };
    default:
      return state;
  }
}
