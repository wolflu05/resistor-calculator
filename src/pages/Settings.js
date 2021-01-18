import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { Switch, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SettingsItem from "../components/SettingsItem";
import Selector from "../components/inputs/Selector";
import { settingsDarkMode, settingsLanguage } from "../redux/actions";
import { languages } from "../util/constants";
import { version } from "../../package.json";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: "500px",
  },
  center: {
    width: "100%",
    textAlign: "center",
  },
}));

function Settings() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  const darkMode = useSelector((state) => state.settings.darkMode);
  const language = useSelector((state) => state.settings.language);

  return (
    <div>
      <Box className={classes.wrapper}>
        <SettingsItem>
          <Typography variant="subtitle1">
            {t("pages.settings.darkMode")}
          </Typography>
          <Switch
            checked={darkMode}
            onChange={() => dispatch(settingsDarkMode())}
          />
        </SettingsItem>

        <SettingsItem>
          <Typography variant="subtitle1">
            {t("pages.settings.language")}
          </Typography>
          <Selector
            value={language}
            onChange={(event) =>
              dispatch(settingsLanguage({ language: event.target.value }))
            }
            items={languages}
          />
        </SettingsItem>

        <SettingsItem>
          <Box className={classes.center}>
            <Typography variant="subtitle1">v{version}</Typography>
          </Box>
        </SettingsItem>
      </Box>
    </div>
  );
}

export default Settings;
