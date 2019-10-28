import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

import Casts from "./Casts/Casts";
import PhotoAlbum from "./Album/PhotoAlbum";
import Recommendation from "./Recommendation";

import { API_KEY, API_URL } from "../data/config";

import "./SingleMovie.css";
import SimilarMovies from "./SimilarMovies";

class SingleMovie extends Component {
  state = {
    isLoading: true,
    movie: {},
    casts: [],
    photos: [],
    recommendations: [],
    similar_movies: []
  };

  movieData = id => {
    let url = `${API_URL}/movie/${id}`;
    let params = {
      api_key: API_KEY
    };
    axios.get(`${url}`, { params }).then(response => {
      this.setState({
        movie: response.data
      });
      axios.get(`${url}/credits`, { params }).then(response => {
        this.setState({
          casts: response.data.cast
        });
        axios.get(`${url}/images`, { params }).then(response => {
          this.setState({
            photos: response.data.backdrops
          });
          axios.get(`${url}/recommendations`, { params }).then(response => {
            this.setState({
              recommendations: response.data.results
            });
            axios.get(`${url}/similar`, { params }).then(response => {
              this.setState({
                isLoading: false,
                similar_movies: response.data.results
              });
            });
          });
        });
      });
    });
  };
  componentDidMount() {
    this.movieData(this.props.match.params.id);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.movieData(nextProps.match.params.id);
    }
  }

  yy_date_format(date) {
    return moment(date, "YYY-MM-DD").format("dddd, MMMM Do YYYY");
  }
  render() {
    document.title = this.state.movie.original_title;
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
                  <td>
                    <span>{this.state.movie.adult ? "R" : "PG"}</span>
                  </td>
                  <td>
                    <span>{this.state.movie.runtime} minutes</span>
                  </td>
                  <td>
                    <span>{this.state.movie.status}</span>
                  </td>
                  <td>
                    <span>
                      {this.yy_date_format(this.state.movie.release_date)}
                    </span>
                  </td>
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
            <Recommendation recommendations={this.state.recommendations} />
            <SimilarMovies similar_movies={this.state.similar_movies} />
          </div>
        </div>
      </div>
    );
  }
}
export default SingleMovie;
