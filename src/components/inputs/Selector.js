import React from "react";

import { Select, MenuItem } from "@material-ui/core";

import BootstrapInput from "./BootstrapInput";

function Selector({ value, onChange, items }) {
  return (
    <div>
      <Select value={value} onChange={onChange} input={<BootstrapInput />}>
        {items.map(({ value, title }) => (
          <MenuItem key={value} value={value}>
            {title}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default Selector;
