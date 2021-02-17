import * as types from "../actions";

export default function getPharmacyMSIReducer(state = [], action) {
  let response = action.response;

  switch (action.type) {
    case types.GET_PHARMACY_MSI_SUCCESS:
      return { ...state, response };
    case types.GET_PHARMACY_MSI_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}
