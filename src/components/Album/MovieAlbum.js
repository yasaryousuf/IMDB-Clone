import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MovieAlbum extends Component {
  render() {
    return (
      <>
        {this.props.movies.map(movie => (
          <div className="col-xl-3 col-md-6" key={movie.id}>
            <div className="card m-card shadow border-0 mb-3">
              <Link to={`/movie/${movie.id}`}>
                <div className="m-card-cover">
                  <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                    <h6 className="text-gray-900 mb-0 font-weight-bold">
                      <i className="fa fa-star text-warning"></i>{" "}
                      {movie.vote_average}
                    </h6>
                    <small className="text-muted">
                      <i className="fa fa-fire text-warning"></i>{" "}
                      {movie.vote_count}
                    </small>
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title text-gray-900 mb-1">
                    {movie.title}
                  </h5>
                  <p className="card-text">
                    <small>
                      {movie.overview.length > 100
                        ? movie.overview.substring(0, 100) + "..."
                        : movie.overview}
                    </small>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default MovieAlbum;
