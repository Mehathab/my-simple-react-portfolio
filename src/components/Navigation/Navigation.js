import React from "react";
import PropTypes from "prop-types";
import classes from "classnames";
import { NavLink } from "react-router-dom";

import localStyles from "./Navigation.module.scss";

const drawLinkComponent = (linkObj) => {
  const { path, name, id } = linkObj || {};
  return (
    <NavLink
      key={id}
      to={path}
      activeClassName={localStyles.activeLink}
      exact
      strict
    >
      {name}
    </NavLink>
  );
};

const Navigation = ({
  children,
  type = "normal",
  className,
  linksList = [],
  ...restProps
}) => {
  return (
    <nav className={classes(className, localStyles.nav)} {...restProps}>
      {linksList?.map(drawLinkComponent)}
    </nav>
  );
};
Navigation.prototype = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["normal", "lead", "subText"]),
};

export default Navigation;
