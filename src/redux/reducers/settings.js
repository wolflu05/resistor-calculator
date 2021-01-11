import types from "../actionTypes.js";

const initialState = {
  darkMode: localStorage.getItem("settings.darkMode") === "true" || false,
  language: localStorage.getItem("settings.language") || "en-EN",
};

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case types.SETTINGS_DARKMODE:
      localStorage.setItem("settings.darkMode", !state.darkMode);

      return {
        ...state,
        darkMode: !state.darkMode,
      };

    case types.SETTINGS_LANGUAGE:
      localStorage.setItem("settings.language", action.language);

      return {
        ...state,
        language: action.language,
      };

    default:
      return state;
  }
}

export default settingsReducer;
