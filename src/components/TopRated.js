import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";

export class TopRated extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", {
        params: {
          api_key: "8c5471fbc2d36272d770ef8db13e2dd7"
        }
      })
      .then(response => {
        this.setState({
          movies: response.data.results
        });
      });
  }
  render() {
    const MovieEl = this.state.movies.map(movie => <Movie movie={movie} />);
    return (
      <div>
        <div className="container">
          <div className="row">{MovieEl}</div>
        </div>
      </div>
    );
  }
}

export default TopRated;
