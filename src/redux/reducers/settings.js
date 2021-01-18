import types from "../actionTypes.js";
import { getLangCode } from "../../util/util";

const preferredTheme = window.matchMedia(" (prefers-color-scheme: dark)")
  ?.matches;
const preferredLanguage = navigator.language || navigator.userLanguage;

const initialState = {
  darkMode:
    localStorage.getItem("settings.darkMode") === "true" ||
    preferredTheme ||
    false,
  language: getLangCode(
    localStorage.getItem("settings.language") || preferredLanguage || "en-EN"
  ),
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
