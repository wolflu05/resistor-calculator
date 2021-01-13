import types from "../actionTypes.js";

const initialState = {
  resistance: 1200,
  tolerance: 1,
  rings: 5,
};

function rcccReducer(state = initialState, action) {
  switch (action.type) {
    case types.RCCC_UPDATE:
      if (action.value <= 0) action.value = 1;

      return {
        ...state,
        [action.key]: action.value,
      };

    default:
      return state;
  }
}

export default rcccReducer;
