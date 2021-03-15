import * as actionTypes from "./types";

const typeInitialState = {
  name: ""
};

export default function reducer(state = typeInitialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE:
      console.log(action.newType);
      return Object.assign({}, state, {
        name: action.newType
      });
    default:
      return state;
  }
}
