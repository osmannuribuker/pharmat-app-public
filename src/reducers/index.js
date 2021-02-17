import { combineReducers } from "redux";
import register from "./registerReducer";
import login from "./loginReducer";
import products from "./productReducers";
import currentUser from "./currenUserReducer";
import pharmacy from "./pharmacyReducer";
import cities from "./getCitiesReducer";
import states from "./getStatesReducer";
import updatedPharmacy from "./updatePharmacyReducer";
import medicineStores from "./getMedicineStoresReducer";
import pharmacyMsi from "./getPharmacyMSIReducer";
import createPharmacyMsi from "./createPharmacyMSIReducer";
import updatePharmacyMsi from "./updatePharmacyMSIReducer";
import groups from "./getGroupsReducer";
import createGroup from "./createGroupReducer";

const rootReducer = combineReducers({
  register,
  login,
  products,
  currentUser,
  pharmacy,
  cities,
  states,
  updatedPharmacy,
  medicineStores,
  pharmacyMsi,
  createPharmacyMsi,
  updatePharmacyMsi,
  groups,
  createGroup,
});

export default rootReducer;
