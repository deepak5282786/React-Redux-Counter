import changeTheNumber from "./upDown";
import mulDivNumber from "./mulDiv";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber,
  mulDivNumber,
});

export default rootReducer;
