import React, { Component } from "react";
import Stars from "./Stars";
import Button from "./Button";
import Answer from "./Answer";
import Number from "./Number";

export default class Game extends Component {
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Number />
      </div>
    );
  }
}
