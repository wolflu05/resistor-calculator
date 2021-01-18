import React from "react";
import { useTranslation } from "react-i18next";

import { FormControl, Select, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { resistorColors } from "../../util/constants";

const useStyles = makeStyles({
  formControl: {
    width: "100%",
  },
});

function Chooser({ value, onChange, ring, options, rings }) {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>
          {ring}. {t("resistor.ring")}
        </InputLabel>
        <Select native value={value} onChange={(e) => onChange(e.target.value)}>
          {options.map(([value, color], i) => {
            let backgroundColor = resistorColors[color][0];
            let textColor = "#fff";
            if (backgroundColor === resistorColors.white[0]) textColor = "#000";

            let str = t(`colors.${color}`);

            if (rings - 1 === ring) {
              // multipler
              str = `${str} (x${value})`;
            } else if (rings === ring) {
              // tolerance
              str = `${str} (${value}%)`;
            } else {
              // color rings
              str = `${str} (${value})`;
            }

            return (
              <option
                value={color}
                key={i}
                style={{ backgroundColor, color: textColor }}
              >
                {str}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default Chooser;
