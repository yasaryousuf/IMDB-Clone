import React, { Component } from "react";
import axios from "axios";
import "./CastComponent.css";
import { Link } from "react-router-dom";

export class CastComponent extends Component {
  state = {
    people: [],
    movie_credits: [],
    external_ids: {},
    images: []
  };
  componentDidMount() {
    let params = {
      api_key: "8c5471fbc2d36272d770ef8db13e2dd7"
    };
    axios
      .get(
        `https://api.themoviedb.org/3/person/${this.props.match.params.id}`,
        {
          params
        }
      )
      .then(response => {
        this.setState({
          people: response.data
        });
        axios
          .get(
            `https://api.themoviedb.org/3/person/${this.props.match.params.id}/movie_credits`,
            {
              params
            }
          )
          .then(response => {
            this.setState({
              movie_credits: response.data.cast
            });
          });
        axios
          .get(
            `https://api.themoviedb.org/3/person/${this.props.match.params.id}/external_ids`,
            {
              params
            }
          )
          .then(response => {
            this.setState({
              external_ids: response.data
            });
          });
        axios
          .get(
            `https://api.themoviedb.org/3/person/${this.props.match.params.id}/images`,
            {
              params
            }
          )
          .then(response => {
            console.log(response);
            this.setState({
              images: response.data.profiles
            });
          });
      });
  }
  render() {
    return (
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-3">
                <div className="bg-white p-3 widget shadow rounded mb-4">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${this.state.people.profile_path}`}
                    className="img-fluid rounded"
                    alt="..."
                  />
                  <h1 className="h6 mb-3 mt-3 font-weight-bold text-gray-900">
                    Personal Info
                  </h1>
                  <p className="mb-2">
                    <i className="fa fa-user-circle fa-fw"></i> Known For -{" "}
                    {this.state.people.known_for_department}
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-venus-mars fa-fw"></i> Gender -{" "}
                    {this.state.people.gender === 2 ? "Male" : "Female"}
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-list-alt fa-fw"></i> Popularity -{" "}
                    {this.state.people.popularity}
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-calendar fa-fw"></i> Date of Birth -
                    {this.state.people.birthday}
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-map-marker fa-fw"></i>{" "}
                    {this.state.people.place_of_birth}
                  </p>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9">
                <div className="bg-white info-header shadow rounded mb-4">
                  <div className="row d-flex align-items-center justify-content-between p-3 border-bottom">
                    <div className="col-lg-7 m-b-4">
                      <h3 className="text-gray-900 mb-0 mt-0 font-weight-bold">
                        {this.state.people.name}
                      </h3>
                      <p className="mb-0 text-gray-800">
                        <small className="text-muted">
                          <i className="fa fa-user-circle fa-fw fa-sm mr-1"></i>{" "}
                          {this.state.people.known_for_department}
                        </small>
                      </p>
                    </div>
                    <div className="col-lg-5 text-right">
                      {this.state.external_ids.facebook_id ? (
                        <a
                          href={`https://www.facebook.com/${this.state.external_ids.facebook_id}`}
                          className="btn btn-primary btn-circle"
                        >
                          <i className="fa fa-facebook-f"></i>
                        </a>
                      ) : (
                        ""
                      )}{" "}
                      {this.state.external_ids.imdb_id ? (
                        <a
                          href={`https://www.imdb.com/name/${this.state.external_ids.imdb_id}`}
                          className="btn btn-warning btn-circle"
                        >
                          <i className="fa fa-imdb"></i>
                        </a>
                      ) : (
                        ""
                      )}{" "}
                      {this.state.external_ids.instagram_id ? (
                        <a
                          href={`https://www.instagram.com/${this.state.external_ids.instagram_id}`}
                          className="btn btn-danger btn-circle"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                      ) : (
                        ""
                      )}{" "}
                      {this.state.external_ids.twitter_id ? (
                        <a
                          href={`https://twitter.com/${this.state.external_ids.twitter_id}`}
                          className="btn btn-info btn-circle"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      ) : (
                        ""
                      )}{" "}
                    </div>
                  </div>
                  <div className="p-3 mb-4">
                    <h1 className="h6 mb-3 mt-0 font-weight-bold text-gray-900">
                      Biography
                    </h1>
                    <div>
                      <p className="mb-0 text-gray-600">
                        {this.state.people.biography}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 widget shadow rounded mb-4">
                  <h1 className="h6 mb-3 mt-0 font-weight-bold text-gray-900">
                    Biography
                  </h1>
                  <div className="row">
                    {this.state.movie_credits
                      .filter((item, index) => index < 12)
                      .map(movie => (
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
                  </div>
                </div>
                <div className="bg-white p-3 widget shadow rounded mb-4">
                  <h1 className="h6 mb-3 mt-0 font-weight-bold text-gray-900">
                    Biography
                  </h1>
                  <div class="row text-center text-lg-left">
                    <div class="col-lg-3 col-md-4 col-6">
                      <a href="/" class="d-block mb-4 h-100">
                        <img
                          class="img-fluid img-thumbnail"
                          src="https://image.tmdb.org/t/p/w500//6ToVeBxxJVMbXnLktGcuTuALcxU.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CastComponent;
