import React, { Component } from "react";

import Cast from "./Cast";

class Casts extends Component {
  render() {
    return (
      <>
        <header className="yy-bg-primary text-center py-5 mb-4">
          <div className="container">
            <h1 className="font-weight-light yy-hero-header-text">
              Meet the Casts
            </h1>
          </div>
        </header>

        <div className="row">
          {this.props.casts
            .filter((item, index) => index < 12)
            .map(cast => (
              <>
                <Cast cast={cast} />
              </>
            ))}
        </div>
      </>
    );
  }
}

export default Casts;
