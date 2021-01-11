import React from "react";

import { List, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import SettingsIcon from "@material-ui/icons/Settings";
import GitHubIcon from "@material-ui/icons/GitHub";

import MenuItem from "./MenuItem";
import { pages, githubLink } from "../../../util/constants";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
});

function MenuItems() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <List>
        <MenuItem icon={MailIcon} id={pages.RESISTANCECOLORCODECALCULATOR} />
      </List>
      <List>
        <Divider />
        <MenuItem icon={SettingsIcon} id={pages.SETTINGS} />
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className={classes.link}
        >
          <GitHubIcon />
        </a>
      </List>
    </div>
  );
}

export default MenuItems;
