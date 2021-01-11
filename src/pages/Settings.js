import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { Switch, FormControlLabel } from "@material-ui/core";

import Selector from "../components/inputs/Selector";
import { settingsDarkMode, settingsLanguage } from "../redux/actions";

function Settings() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.settings.darkMode);
  const language = useSelector((state) => state.settings.language);

  return (
    <div>
      <FormControlLabel
        value="start"
        control={
          <Switch
            checked={darkMode}
            onChange={() => dispatch(settingsDarkMode())}
          />
        }
        label={t("pages.settings.darkMode")}
        labelPlacement="start"
      />
      <br />
      <br />

      <FormControlLabel
        value="start"
        control={
          <Selector
            value={language}
            onChange={(event) =>
              dispatch(settingsLanguage({ language: event.target.value }))
            }
            items={[
              { value: "en-EN", title: "English" },
              { value: "de-DE", title: "Deutsch" },
            ]}
          />
        }
        label={t("pages.settings.language")}
        labelPlacement="start"
      />
    </div>
  );
}

export default Settings;
