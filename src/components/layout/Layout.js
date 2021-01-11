import React from "react";

import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Navigation/Header";
import Menu from "./Navigation/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />

      <Menu />

      <div className={classes.content}>
        <Toolbar />

        {children}
      </div>
    </div>
  );
}

export default Layout;
