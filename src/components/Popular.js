import React, { Component } from "react";
import axios from "axios";

import Movie from "./Movie";
import Loader from "../includes/Loader";

import { API_KEY, API_URL } from "../data/config";

export class Popular extends Component {
  state = {
    movies: [],
    isLoading: true
  };
  componentDidMount() {
    axios
      .get(`${API_URL}/movie/popular`, {
        params: {
          api_key: API_KEY
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
          <div class="bg-white p-3 widget shadow rounded mb-4">
            <div class="row">
              {this.state.isLoading ? <Loader /> : <>{MovieEl}</>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popular;
