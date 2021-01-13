import React from "react";

import { Grid } from "@material-ui/core";

import {
  resistanceToRingColors,
  colorRingsToResistance,
  colorRingColors,
  multiplierRingColors,
  toleranceRingsColors,
} from "../util/resistance";
import Chooser from "./inputs/Chooser";

function ColorChooser({
  resistance,
  setResistance,
  tolerance,
  setTolerance,
  rings,
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

  return (
    <Grid container spacing={3}>
      <Grid item sm={1} xs={false}></Grid>

      {ringColors.map((color, i) => {
        return (
          <Grid item sm={2} xs={12} key={i}>
            <Chooser
              value={color}
              onChange={(value) => onChange(i, value)}
              ring={i + 1}
              options={allColors[i]}
            />
          </Grid>
        );
      })}

      <Grid item sm={2} xs={false}></Grid>
    </Grid>
  );
}

export default ColorChooser;
