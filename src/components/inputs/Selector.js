import React from "react";

import { Select, MenuItem } from "@material-ui/core";

import BootstrapInput from "./BootstrapInput";

function LanguageSelector({ value, onChange, items }) {
  return (
    <div>
      <Select value={value} onChange={onChange} input={<BootstrapInput />}>
        {items.map(({ value, title }) => (
          <MenuItem value={value}>{title}</MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default LanguageSelector;
