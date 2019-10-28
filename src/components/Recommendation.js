import React, { Component } from "react";

import Movie from "./Movie";

export class Recommendation extends Component {
  state = {
    maxShowItem: 8
  };

  handleShowAll = () => {
    console.log("sfs");
    this.setState(prevState => ({
      maxShowItem: prevState.maxShowItem == 8 ? 20 : 8
    }));
  };

  render() {
    return (
      <div>
        <div className="bg-white p-3 widget shadow rounded mb-4">
          <div className="row">
            <div className="col-md-6">
              <h1 className="h6 mb-3 mt-0 font-weight-bold text-gray-900">
                Recommendations
              </h1>
            </div>
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-outline-info btn-sm pull-right"
                onClick={this.handleShowAll}
              >
                See all
              </button>
            </div>
          </div>
          <div className="row">
            {this.props.recommendations.map((movie, index) => (
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

export default Recommendation;
