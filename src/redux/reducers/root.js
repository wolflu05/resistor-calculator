import { combineReducers } from "redux";

import settings from "./settings.js";
import menu from "./menu.js";
import rccc from "./rccc.js";

const rootReducer = combineReducers({
  settings,
  menu,
  rccc,
});

export default rootReducer;
