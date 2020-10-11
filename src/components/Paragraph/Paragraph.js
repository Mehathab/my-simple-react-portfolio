import React from "react";
import PropTypes from "prop-types";
import classes from "classnames";
import localStyles from "./Paragraph.module.scss";

const Paragraph = ({ children, type = "normal", className, ...restProps }) => (
  <p className={classes(className, localStyles[type])} {...restProps}>
    {children}
  </p>
);
Paragraph.prototype = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["normal", "lead", "subText"]),
};

export default Paragraph;
