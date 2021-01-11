import { combineReducers } from "redux";

import settings from "./settings.js";
import menu from "./menu.js";

const rootReducer = combineReducers({
  settings,
  menu,
});

export default rootReducer;
