import React, { Component } from "react";

import Movie from "../Movie";

export class Biography extends Component {
  state = {
    maxShowItem: 8
  };

  handleShowAll = () => {
    this.setState(prevState => ({
      maxShowItem: prevState.maxShowItem === 8 ? 20 : 8
    }));
  };

  render() {
    return (
      <div>
        <div className="bg-white p-3 widget shadow rounded mb-4">
          <div className="row mb-3">
            <div className="col-md-6">
              <h1 className="h6 font-weight-bold text-gray-900">Biography</h1>
            </div>
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-outline-info btn-sm pull-right"
                onClick={this.handleShowAll}
              >
                {this.state.maxShowItem === 8 ? "See all" : "See less"}
              </button>
            </div>
          </div>
          <div className="row">
            {this.props.biographies.map((movie, index) => (
              <Movie
                movie={movie}
                index={index}
                maxShowItem={this.state.maxShowItem}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Biography;
