import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    total: PropTypes.string,
    operation: PropTypes.string,
    next: PropTypes.string
  };

  render() {
    return (
      <div className="component-display">
        <span>{this.props.total}</span>
        <span>{this.props.operation}</span>
        <span>{this.props.next}</span>
      </div>
    );
  }
}
