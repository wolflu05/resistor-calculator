import React from "react";
import { useSelector } from "react-redux";

import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

import { light, dark } from "../../util/theme";

function ThemeProvider({ children }) {
  const lightTheme = createMuiTheme(light);

  const darkTheme = createMuiTheme(dark);

  const theme = useSelector((state) => state.settings.darkMode)
    ? darkTheme
    : lightTheme;

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default ThemeProvider;
