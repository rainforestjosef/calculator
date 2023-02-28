import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display total={this.state.total || ""} operation={this.state.operation || ""} next={this.state.operation || this.state.next ? this.state.next : ""} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
