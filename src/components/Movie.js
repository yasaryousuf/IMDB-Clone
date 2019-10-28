import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

export class Movie extends Component {
  state = {
    isHovered: false,
    showAll: false
  };

  handleHover = () => {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
  };

  render() {
    const btnClass = this.state.isHovered ? "dark" : "";
    const isVisible =
      this.props.index >= this.props.maxShowItem ? "d-none" : "";
    return (
      <>
        <div className={`col-md-3 mb-2 ${isVisible}`} key={this.props.movie.id}>
          <div className="card h-100">
            <img
              className={`card-img-top ${btnClass}`}
              src={`https://image.tmdb.org/t/p/w300/${this.props.movie.poster_path}`}
              alt=""
            />
            <Link to={`/movie/${this.props.movie.id}`} title="Click for more">
              <div
                className="card-img-overlay"
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
              >
                <h6 className="card-title">{this.props.movie.title}</h6>
                <p className="card-text">
                  {this.props.movie.overview.length > 150
                    ? this.props.movie.overview.substring(0, 100) + "..."
                    : this.props.movie.overview}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Movie;
