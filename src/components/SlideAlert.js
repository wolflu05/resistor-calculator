import React, { useEffect } from "react";

import { Slide } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  alert: {
    position: "fixed",
    bottom: theme.spacing(),
    right: theme.spacing(),
    width: "35%",
    [theme.breakpoints.down("sm")]: {
      width: `calc(100% - ${theme.spacing(2)}px)`,
    },
  },
}));

function SlideAlert({
  opened,
  direction,
  severity,
  action,
  text,
  onClose,
  closeAfter,
  children,
}) {
  const classes = useStyles();

  useEffect(() => {
    if (opened && closeAfter && onClose) {
      const timeoutId = setTimeout(onClose, closeAfter);
      return () => clearTimeout(timeoutId);
    }
  });

  return (
    <div>
      <Slide direction={direction} in={opened} mountOnEnter unmountOnExit>
        <Alert
          severity={severity}
          onClose={onClose}
          action={action}
          className={classes.alert}
        >
          {text}
          {children}
        </Alert>
      </Slide>
    </div>
  );
}

export default SlideAlert;
