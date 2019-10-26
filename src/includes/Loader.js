import React, { Component } from "react";

import "./Loader.css";

export class Loader extends Component {
  render() {
    return (
      <div className="loader center text-center">
        <i className="fa fa-cog fa-spin" />
      </div>
    );
  }
}

export default Loader;
