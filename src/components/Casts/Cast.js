import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Cast.css";

export class Cast extends Component {
  state = {
    isHovered: false
  };

  handleHover = () => {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
  };

  render() {
    const btnClass = this.state.isHovered ? "shadow" : "";
    let { cast } = this.props;
    return (
      <>
        <div
          className="col-xl-2 col-md-4 mb-4 cast"
          key={cast.id}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
        >
          <Link to={`/cast/${cast.id}`}>
            <div className={`card border-0 ${btnClass}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
                className="card-img-top"
                alt="..."
              />
              <div
                className="card-body text-center"
                style={{ padding: ".5rem" }}
              >
                <h6 className="card-title mb-0">
                  {cast.character.includes("/")
                    ? cast.character.split("/")[1]
                    : cast.character}
                </h6>
                <div className="card-text text-black-50">{cast.name}</div>
              </div>
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default Cast;
