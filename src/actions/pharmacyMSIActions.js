import {
  GET_PHARMACY_MSI,
  CREATE_PHARMACY_MSI,
  UPDATE_PHARMACY_MSI,
} from "./index";

export const getPharmacyMSIAction = (success) => {
  return {
    type: GET_PHARMACY_MSI,
    success,
  };
};

export const createPharmacyMSIAction = (pharmacy_msi, success, error) => {
  return {
    type: CREATE_PHARMACY_MSI,
    pharmacy_msi,
    success,
    error,
  };
};

export const updatePharmacyMSIAction = (pharmacy_msi, pk, success, error) => {
  return {
    type: UPDATE_PHARMACY_MSI,
    pharmacy_msi,
    pk,
    success,
    error,
  };
};
