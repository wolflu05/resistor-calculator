import types from "./actionTypes.js";

export function settingsDarkMode() {
  return {
    type: types.SETTINGS_DARKMODE,
  };
}

export function settingsLanguage({ language }) {
  return {
    type: types.SETTINGS_LANGUAGE,
    language,
  };
}

export function menuOpen({ state }) {
  return {
    type: types.MENU_OPEN,
    state,
  };
}

export function menuPage({ page }) {
  return {
    type: types.MENU_PAGE,
    page,
  };
}