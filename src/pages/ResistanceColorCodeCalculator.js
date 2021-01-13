import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import { rcccUpdate } from "../redux/actions";
import { resistanceToRingColorsHex } from "../util/resistance";
import Resistor5Rings from "../components/Resistor5Rings";
import ColorChooser from "../components/ColorChooser";
import Result from "../components/Result";

const useStyles = makeStyles((theme) => ({
  resistor: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(8),
    },
  },
}));

function ResistanceColorCodeCalculator() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const classes = useStyles();

  const { resistance, tolerance, rings } = useSelector((state) => state.rccc);

  const setResistance = (resistance) =>
    dispatch(rcccUpdate({ key: "resistance", value: resistance }));
  const setTolerance = (tolerance) =>
    dispatch(rcccUpdate({ key: "tolerance", value: tolerance }));

  let colors = resistanceToRingColorsHex(resistance, tolerance, 5);
  const valid = colors.findIndex((ring) => ring === undefined) === -1;
  if (!valid) colors = Array.from({ length: rings }, () => [0, 0]);

  return (
    <div>
      <div className={classes.resistor}>
        {rings === 5 && <Resistor5Rings colors={colors} />}
      </div>

      <ColorChooser
        resistance={resistance}
        setResistance={setResistance}
        tolerance={tolerance}
        setTolerance={setTolerance}
        rings={rings}
      />

      {!valid && (
        <Alert severity="error">{t("errors.resistorNotDisplayable")}</Alert>
      )}

      <Result resistance={resistance} tolerance={tolerance} />
    </div>
  );
}

export default ResistanceColorCodeCalculator;
