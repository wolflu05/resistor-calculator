import { combineReducers } from "redux";

import settings from "./settings.js";
import menu from "./menu.js";
import rccc from "./rccc.js";
import sw from "./sw.js";

const rootReducer = combineReducers({
  settings,
  menu,
  rccc,
  sw,
});

export default rootReducer;
