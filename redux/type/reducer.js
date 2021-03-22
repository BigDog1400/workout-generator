import * as actionTypes from "./types";

const typeInitialState = {
  type: ""
};

export default function reducer(state = typeInitialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE:
      return Object.assign({}, state, {
        type: action.newType
      });
    default:
      return state;
  }
}
