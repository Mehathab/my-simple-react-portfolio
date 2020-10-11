import React from "react";
import PropTypes from "prop-types";
import classes from "classnames";
import localStyles from "./Header.module.scss";

const Header = ({ children, className, ...restProps }) => (
  <header className={classes(className, localStyles.header)} {...restProps}>
    {children}
  </header>
);
Header.prototype = {
  className: PropTypes.string,
};

export default Header;
