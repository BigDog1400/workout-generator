import { combineReducers } from "redux";
import typeTrainingReducer from "./type/reducer";
const reducers = {
  typeTraining: typeTrainingReducer
};

export default combineReducers(reducers);
