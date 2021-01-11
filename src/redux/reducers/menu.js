import types from "../actionTypes.js";
import { pages } from "../../util/constants";

const initialState = {
  opened: false,
  page: pages.RESISTANCECOLORCODECALCULATOR,
};

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case types.MENU_OPEN:
      return {
        ...state,
        opened: action.state,
      };

    case types.MENU_PAGE:
      return {
        ...state,
        page: action.page,
      };

    default:
      return state;
  }
}

export default menuReducer;
