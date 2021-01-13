import React from "react";
import { useSelector } from "react-redux";

import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

import { light, dark } from "../../util/theme";

function ThemeProvider({ children }) {
  const theme = useSelector((state) => state.settings.darkMode)
    ? createMuiTheme(dark)
    : createMuiTheme(light);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default ThemeProvider;
