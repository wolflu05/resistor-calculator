import React from "react";

import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1.5),
    marginTop: theme.spacing(),
  },
  wrapper: {
    width: "100%",
  },
}));

function SettingsItem({ children }) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} variant="outlined">
      <Grid
        className={classes.wrapper}
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {children}
      </Grid>
    </Paper>
  );
}

export default SettingsItem;
