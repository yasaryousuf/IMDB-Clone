import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

import Casts from "./Casts/Casts";
import PhotoAlbum from "./Album/PhotoAlbum";
// import Spinner from "../includes/Spinner";

class SingleMovie extends Component {
  state = {
    isLoading: true,
    movie: {},
    casts: [],
    photos: []
  };
  componentDidMount() {
    axios
      .get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`, {
        params: {
          api_key: "8c5471fbc2d36272d770ef8db13e2dd7"
        }
      })
      .then(response => {
        this.setState({
          isLoading: false,
          movie: response.data
        });
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits`,
            {
              params: {
                api_key: "8c5471fbc2d36272d770ef8db13e2dd7"
              }
            }
          )
          .then(response => {
            this.setState({
              casts: response.data.cast
            });
          });
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${this.props.match.params.id}/images`,
            {
              params: {
                api_key: "8c5471fbc2d36272d770ef8db13e2dd7"
              }
            }
          )
          .then(response => {
            this.setState({
              photos: response.data.backdrops
            });
          });
      });
  }

  yy_date_format(date) {
    return moment(date, "YYY-MM-DD").format("dddd, MMMM Do YYYY");
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-10">
                <h1 className="mt-4 movie-title">
                  {this.state.movie.original_title}
                </h1>
              </div>
              <div className="col-lg-2 mt-4">
                <i className="fa fa-2x fa-star text-warning"></i>{" "}
                <span style={{ fontSize: "2em" }}>
                  {this.state.movie.vote_average}/10
                </span>
                <br />
                <small>({this.state.movie.vote_count} votes)</small>
              </div>
            </div>
            <p className="lead">
              {this.state.movie.genres
                ? this.state.movie.genres.map(genre => (
                    <span
                      className="badge badge-primary ml-1 tag"
                      key={genre.id}
                    >
                      {genre.name} <span> </span>
                    </span>
                  ))
                : ""}{" "}
            </p>
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td>{this.state.movie.adult ? "R" : "PG"}</td>
                  <td>{this.state.movie.runtime} minutes</td>
                  <td>{this.state.movie.status}</td>
                  <td>{this.yy_date_format(this.state.movie.release_date)}</td>
                </tr>
              </tbody>
            </table>
            <img
              className="img-fluid rounded"
              src={`https://image.tmdb.org/t/p/original/${this.state.movie.backdrop_path}`}
              alt=""
            />
            <p
              className="display-4"
              style={{
                fontSize: "2.5em",
                marginTop: "1.5em",
                marginBottom: "1.5em"
              }}
            >
              {this.state.movie.overview}
            </p>

            <PhotoAlbum photos={this.state.photos} />
            <Casts casts={this.state.casts} />
          </div>
        </div>
      </div>
    );
  }
}
export default SingleMovie;
