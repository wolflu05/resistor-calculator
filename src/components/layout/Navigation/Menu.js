import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Divider,
  Toolbar,
  Drawer,
  SwipeableDrawer,
  Hidden,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

import { menuOpen } from "../../../redux/actions";
import { drawerWidth } from "../../../util/constants";
import MenuList from "./MenuList";

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
  drawerContainer: {
    overflow: "auto",
    height: "100%",
  },
}));

function Menu() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const menuOpened = useSelector((state) => state.menu.opened);

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <SwipeableDrawer
          variant="temporary"
          anchor="left"
          open={menuOpened}
          onClose={() => dispatch(menuOpen({ state: false }))}
          onOpen={() => dispatch(menuOpen({ state: true }))}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <IconButton
            onClick={() => dispatch(menuOpen({ state: false }))}
            className={classes.closeMenuButton}
          >
            <CloseIcon />
          </IconButton>
          <div className={classes.drawerContainer}>
            <Divider />
            <MenuList />
          </div>
        </SwipeableDrawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          variant="permanent"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <MenuList />
          </div>
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default Menu;
