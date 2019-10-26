import React, { Component } from "react";
import axios from "axios";

import Movie from "./Movie";
import Loader from "../includes/Loader";

export class Home extends Component {
  state = {
    movies: [],
    isLoading: true
  };
  componentDidMount() {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: "8c5471fbc2d36272d770ef8db13e2dd7"
        }
      })
      .then(response => {
        this.setState({
          movies: response.data.results,
          isLoading: false
        });
      });
  }
  render() {
    const MovieEl = this.state.movies.map(movie => <Movie movie={movie} />);
    return (
      <div>
        <div className="container">
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <div className="row">{MovieEl}</div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
