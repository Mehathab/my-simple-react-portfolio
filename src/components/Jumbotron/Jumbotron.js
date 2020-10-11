import React from "react";
import PropTypes from "prop-types";
import classes from "classnames";
import localStyles from "./Jumbotron.module.scss";

const Jumbotron = ({ children, className, ...restProps }) => (
  <h1 className={classes(className, localStyles.jumbotron)} {...restProps}>
    {children}
  </h1>
);
Jumbotron.prototype = {
  className: PropTypes.string,
};

export default Jumbotron;
