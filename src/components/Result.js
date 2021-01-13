import React from "react";
import { useTranslation } from "react-i18next";

import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { resistanceToHumanReadable } from "../util/resistance";

const useStyles = makeStyles({
  paper: {
    marginTop: 20,
    marginBottom: 20,
    padding: 4,
  },
  result: {
    fontSize: 16,
  },
});

function Result({ resistance, tolerance }) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Paper className={classes.paper} variant={"outlined"}>
      <Typography variant="h6" align={"center"}>
        <span className={classes.result}>{t("resistor.resistance")}:</span>{" "}
        {resistanceToHumanReadable(resistance)}{" "}
        <span className={classes.result}>{t("resistor.tolerance")}:</span> ±{tolerance}%
      </Typography>
    </Paper>
  );
}

export default Result;
