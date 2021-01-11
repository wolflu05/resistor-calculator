import React from "react";
import { useSelector } from "react-redux";

import { CssBaseline } from "@material-ui/core";

import ThemeProvider from "./components/layout/ThemeProvider";
import Layout from "./components/layout/Layout";
import ResistanceColorCodeCalculator from "./pages/ResistanceColorCodeCalculator";
import SettingsPage from "./pages/Settings";
import { pages } from "./util/constants";

function App() {
  const page = useSelector((state) => state.menu.page);

  return (
    <ThemeProvider>
      <CssBaseline />

      <Layout>
        {page === pages.RESISTANCECOLORCODECALCULATOR && (
          <ResistanceColorCodeCalculator />
        )}
        {page === pages.SETTINGS && <SettingsPage />}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
