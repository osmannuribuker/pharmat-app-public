import * as types from "../actions";

export default function updatePharmacyMSIReducer(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case types.UPDATE_PHARMACY_MSI_SUCCESS:
      return { ...state, ...response };
    case types.UPDATE_PHARMACY_MSI_ERROR:
      return { ...state, ...response };
    default:
      return state;
  }
}
