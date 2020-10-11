import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class BaseComponent extends PureComponent {
  constructor() {
    super(props);
    this.state = {
      isError: false,
    };
    this.contentSvcParam = null;
  }
  componentDidMount() {}
  callSvcAction = () => (svcAction, params) => {
    if (typeof svcAction === "function") svcAction(params);
  };
}
