import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { Button, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SlideAlert from "./SlideAlert";
import { swInit } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  progress: {
    marginTop: theme.spacing(),
  },
}));

function SwAlert() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const classes = useStyles();
  const [updated, setUpdated] = useState(false);

  const isServiceWorkerInitialized = useSelector(
    (state) => state.sw.serviceWorkerInitialized
  );
  const isServiceWorkerUpdated = useSelector(
    (state) => state.sw.serviceWorkerUpdated
  );
  const serviceWorkerRegistration = useSelector(
    (state) => state.sw.serviceWorkerRegistration
  );

  const updateServiceWorker = () => {
    if (updated) return;
    setUpdated(true);

    const registrationWaiting = serviceWorkerRegistration.waiting;

    if (registrationWaiting) {
      registrationWaiting.postMessage({ type: "SKIP_WAITING" });

      registrationWaiting.addEventListener("statechange", (e) => {
        if (e.target.state === "activated") {
          window.location.reload();
        }
      });
    }
  };

  return (
    <div>
      <SlideAlert
        opened={isServiceWorkerInitialized}
        direction="left"
        severity="success"
        text={t("alerts.sw.swInit")}
        onClose={() => dispatch(swInit({ state: false }))}
        closeAfter={12000}
      />

      <SlideAlert
        opened={isServiceWorkerUpdated}
        direction="left"
        severity="info"
        text={t("alerts.sw.swUpdate")}
        action={
          <Button
            variant="outlined"
            color="inherit"
            size="small"
            onClick={updateServiceWorker}
            disabled={updated}
          >
            {t("alerts.sw.swUpdateButton")}
          </Button>
        }
      >
        {updated && <LinearProgress className={classes.progress} />}
      </SlideAlert>
    </div>
  );
}

export default SwAlert;
