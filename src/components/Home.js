import React, { Component } from "react";
import axios from "axios";

export class Home extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: "8c5471fbc2d36272d770ef8db13e2dd7"
        }
      })
      .then(response => {
        console.log(response.data.results);
        this.setState({
          movies: [...response.data.results]
        });
      });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.state.movies.map(movie => {
              return `
      <div className="col-md-4 mb-5" key=${movie.id}>
        <div className="card h-100">
          <img
            className="card-img-top"
            src="http://placehold.it/300x200"
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">${movie.title}</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              esse necessitatibus neque sequi doloribus.
            </p>
            <a href="#" className="btn btn-primary">
              Find Out More!
            </a>
          </div>
        </div>
      </div>`;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
