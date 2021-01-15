import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Paper, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  resistanceToHumanReadable,
  humanReadableToResistance,
} from "../util/resistance";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 20,
    marginBottom: 20,
    padding: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    margin: theme.spacing(),
  },
  input: {
    letterSpacing: 1,
    width: "100px",
  },
}));

function Result({ resistance, setResistance, tolerance }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [resistanceInput, setResistanceInput] = useState("");
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    setInputError(false);
    setResistanceInput(resistanceToHumanReadable(resistance));
  }, [resistance]);

  return (
    <Paper className={classes.paper} variant={"outlined"}>
      <Typography variant="subtitle1">{t("resistor.resistance")}:</Typography>
      <TextField
        className={classes.label}
        inputProps={{
          className: classes.input,
          spellCheck: false,
        }}
        variant="outlined"
        size="small"
        error={inputError}
        value={resistanceInput}
        onChange={(event) => {
          const resistance = humanReadableToResistance(event.target.value);
          setResistanceInput(event.target.value);
          if (resistance === null) {
            setInputError(true);
          } else {
            setInputError(false);
            setResistance(resistance);
          }
        }}
      />
      <Typography variant="subtitle1" className={classes.label}>
        {t("resistor.tolerance")}:
      </Typography>
      <Typography variant="subtitle1">±{tolerance}%</Typography>
    </Paper>
  );
}

export default Result;
