import React from "react";
import { useTranslation } from "react-i18next";

import { Grid, Box, Switch } from "@material-ui/core";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { makeStyles } from "@material-ui/core/styles";

import {
  resistanceToRingColors,
  colorRingsToResistance,
  colorRingColors,
  multiplierRingColors,
  toleranceRingsColors,
} from "../util/resistance";
import Chooser from "./inputs/Chooser";

const useStyles = makeStyles((theme) => ({
  ringsGrid: {
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
      paddingBottom: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  ringsSwitch: {
    [theme.breakpoints.up("sm")]: {
      transform: "rotate(90deg)",
    },
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
  },
}));

function ColorChooser({
  resistance,
  setResistance,
  tolerance,
  setTolerance,
  rings,
  setRings,
  width,
}) {
  const ringColors = resistanceToRingColors(resistance, tolerance, rings);
  const allColors = Array.from({ length: rings }, () =>
    Object.entries(colorRingColors)
  );
  allColors[rings - 2] = Object.entries(multiplierRingColors);
  allColors[rings - 1] = Object.entries(toleranceRingsColors);

  const onChange = (i, value) => {
    ringColors[i] = value;
    const [resistance, tolerance] = colorRingsToResistance(ringColors);

    setResistance(resistance);
    setTolerance(tolerance);
  };

  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid container spacing={3}>
      <Grid item sm={1} xs={12} className={classes.ringsGrid}>
        <Box>
          4 {t("resistor.ring", { count: 4 })}
          <Switch
            className={classes.ringsSwitch}
            checked={rings === 5}
            onChange={() => {
              setRings(rings === 5 ? 4 : 5);
            }}
          />{" "}
          5 {t("resistor.ring", { count: 5 })}
        </Box>
      </Grid>

      {rings === 4 && isWidthUp("sm", width) && (
        <Grid item sm={1} zeroMinWidth={true}></Grid>
      )}

      {ringColors.map((color, i) => {
        return (
          <Grid item sm={2} xs={12} key={i}>
            <Chooser
              value={color}
              onChange={(value) => onChange(i, value)}
              ring={i + 1}
              rings={rings}
              options={allColors[i]}
            />
          </Grid>
        );
      })}

      {isWidthUp("sm", width) && <Grid item sm={rings === 4 ? 2 : 1}></Grid>}
    </Grid>
  );
}

export default withWidth()(ColorChooser);
