import types from "../actionTypes.js";

const initialState = {
  serviceWorkerInitialized: false,
  serviceWorkerUpdated: false,
  serviceWorkerRegistration: null,
};

function swReducer(state = initialState, action) {
  switch (action.type) {
    case types.SW_INIT:
      return {
        ...state,
        serviceWorkerInitialized:
          action.state || !state.serviceWorkerInitialized,
      };

    case types.SW_UPDATE:
      return {
        ...state,
        serviceWorkerUpdated: !state.serviceWorkerUpdated,
        serviceWorkerRegistration: action.registration,
      };

    default:
      return state;
  }
}

export default swReducer;
