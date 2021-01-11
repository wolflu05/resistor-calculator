import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import { menuPage, menuOpen } from "../../../redux/actions";

function MenuItem({ icon: Icon, id }) {
  const { t } = useTranslation();
  const selected = useSelector((state) => state.menu.page) === id;
  const dispatch = useDispatch();

  return (
    <ListItem
      button
      selected={selected}
      onClick={() => {
        dispatch(menuPage({ page: id }));
        dispatch(menuOpen({ state: false }));
      }}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={t(`pages.${id.toLowerCase()}.heading`)} />
    </ListItem>
  );
}

export default MenuItem;
