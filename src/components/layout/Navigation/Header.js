import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

import { menuOpen } from "../../../redux/actions";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function Header() {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();

  const pageName = useSelector((state) => state.menu.page);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open menu"
          onClick={() => dispatch(menuOpen({ state: true }))}
        >
          <MenuIcon />
        </IconButton>
        <Hidden smUp implementation="css">
          <Typography variant="h6" noWrap>
            {t(`pages.${pageName.toLowerCase()}.heading`)}
          </Typography>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Typography variant="h6" noWrap>
            {t("general.name")}
          </Typography>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
