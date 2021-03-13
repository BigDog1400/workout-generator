export const typeActionTypes = {
  CHANGE: "CHANGE"
};

export const changeType = ({ type }) => (dispatch) => {
  return dispatch({ type: countActionTypes.CHANGE, newType: type });
};
