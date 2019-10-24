import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Movie extends Component {
  render() {
    return (
      <>
        <div className="col-md-4 mb-5" key={this.props.movie.id}>
          <div className="card h-100">
            <img
              className="card-img-top"
              src={`https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path}`}
              alt=""
            />
            <div className="card-body">
              <h4 className="card-title">{this.props.movie.title}</h4>
              <p className="card-text">
                {this.props.movie.overview.length > 150
                  ? this.props.movie.overview.substring(0, 100) + "..."
                  : this.props.movie.overview}
              </p>
              <Link
                to={`/movie/${this.props.movie.id}`}
                className="btn btn-primary"
              >
                Find Out More!
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Movie;
