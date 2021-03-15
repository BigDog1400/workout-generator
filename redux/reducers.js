import { combineReducers } from "redux";
import typeTrainingReducer from "./type/reducer";
import levelTrainingReducer from "./level/reducer";
const reducers = {
  typeTraining: typeTrainingReducer,
  levelTraining: levelTrainingReducer
};

export default combineReducers(reducers);
