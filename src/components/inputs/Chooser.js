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

function Chooser({ value, onChange, ring, options }) {
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

            return (
              <option
                value={color}
                key={i}
                style={{ backgroundColor, color: textColor }}
              >
                {t(`colors.${color}`)} ({ring === 4 && "x"}
                {value}
                {ring === 5 && "%"})
              </option>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default Chooser;
