import React, { Component } from "react";
import axios from "axios";

export class CastComponent extends Component {
  state = {
    movie: []
  };
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${this.props.match.params.id}`,
        {
          params: {
            api_key: "8c5471fbc2d36272d770ef8db13e2dd7"
          }
        }
      )
      .then(response => {
        console.log(response);
        this.setState({
          movie: response.data
        });
      });
  }
  render() {
    return (
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-3 col-lg-3">
                <div class="bg-white p-3 widget shadow rounded mb-4">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${this.state.movie.profile_path}`}
                    class="img-fluid rounded"
                    alt="..."
                  />
                  <h1 class="h6 mb-3 mt-3 font-weight-bold text-gray-900">
                    Personal Info
                  </h1>
                  <p class="mb-2">
                    <i class="fa fa-user-circle fa-fw"></i> Known For -{" "}
                    {this.state.movie.known_for_department}
                  </p>
                  <p class="mb-2">
                    <i class="fa fa-venus-mars fa-fw"></i> Gender -{" "}
                    {this.state.movie.gender === 2 ? "Male" : "Female"}
                  </p>
                  <p class="mb-2">
                    <i class="fa fa-list-alt fa-fw"></i> Popularity -{" "}
                    {this.state.movie.popularity}
                  </p>
                  <p class="mb-2">
                    <i class="fa fa-calendar-alt fa-fw"></i> Date of Birth -
                    {this.state.movie.birthday}
                  </p>
                  <p class="mb-2">
                    <i class="fa fa-map-marker-alt fa-fw"></i>{" "}
                    {this.state.movie.place_of_birth}
                  </p>
                </div>
              </div>
              <div class="col-xl-9 col-lg-9">
                <div class="bg-white info-header shadow rounded mb-4">
                  <div class="row d-flex align-items-center justify-content-between p-3 border-bottom">
                    <div class="col-lg-7 m-b-4">
                      <h3 class="text-gray-900 mb-0 mt-0 font-weight-bold">
                        {this.state.movie.name}
                      </h3>
                      <p class="mb-0 text-gray-800">
                        <small class="text-muted">
                          <i class="fa fa-user-circle fa-fw fa-sm mr-1"></i>{" "}
                          {this.state.movie.known_for_department}
                        </small>
                      </p>
                    </div>
                    <div class="col-lg-5 text-right">
                      <a href="#" class="btn btn-primary btn-circle">
                        <i class="fa fa-facebook-f"></i>
                      </a>{" "}
                      <a href="#" class="btn btn-danger btn-circle">
                        <i class="fa fa-youtube"></i>
                      </a>{" "}
                      <a href="#" class="btn btn-warning btn-circle">
                        <i class="fa fa-snapchat-ghost"></i>
                      </a>{" "}
                      <a href="#" class="btn btn-info btn-circle">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div class="p-3 mb-4">
                    <h1 class="h6 mb-3 mt-0 font-weight-bold text-gray-900">
                      Biography
                    </h1>
                    <div>
                      <p class="mb-0 text-gray-600">
                        {this.state.movie.biography}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="bg-white p-3 widget shadow rounded mb-4">
                  <h1 class="h6 mb-3 mt-0 font-weight-bold text-gray-900">
                    Biography
                  </h1>
                  <div class="row">
                    <div class="col-xl-3 col-md-6">
                      <div class="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div class="m-card-cover">
                            <div class="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 class="text-gray-900 mb-0 font-weight-bold">
                                <i class="fa fa-thumbs-up text-success"></i> 88%
                              </h6>
                              <small class="text-muted">23,421</small>
                            </div>
                            <img
                              src="https://via.placeholder.com/172x250.png"
                              class="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div class="card-body p-3">
                            <h5 class="card-title text-gray-900 mb-1">
                              Jumanji: The Next Level
                            </h5>
                            <p class="card-text">
                              <small class="text-muted">English</small>{" "}
                              <small class="text-danger">
                                <i class="fa fa-calendar-alt fa-sm text-gray-400"></i>{" "}
                                22 AUG
                              </small>{" "}
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                      <div class="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div class="m-card-cover">
                            <div class="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 class="text-gray-900 mb-0 font-weight-bold">
                                <i class="fa fa-heart text-danger"></i> 50%
                              </h6>
                              <small class="text-muted">8,784</small>
                            </div>
                            <img
                              src="https://via.placeholder.com/172x250.png"
                              class="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div class="card-body p-3">
                            <h5 class="card-title text-gray-900 mb-1">
                              Gemini Man
                            </h5>
                            <p class="card-text">
                              <small class="text-muted">English</small>{" "}
                              <small class="text-danger">
                                <i class="fa fa-calendar-alt fa-sm text-gray-400"></i>{" "}
                                22 AUG
                              </small>{" "}
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                      <div class="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div class="m-card-cover">
                            <div class="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 class="text-gray-900 mb-0 font-weight-bold">
                                <i class="fa fa-heart text-danger"></i> 20%
                              </h6>
                              <small class="text-muted">69,123</small>
                            </div>
                            <img
                              src="https://via.placeholder.com/172x250.png"
                              class="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div class="card-body p-3">
                            <h5 class="card-title text-gray-900 mb-1">
                              The Current War
                            </h5>
                            <p class="card-text">
                              <small class="text-muted">English</small>{" "}
                              <small class="text-danger">
                                <i class="fa fa-calendar-alt fa-sm text-gray-400"></i>{" "}
                                22 AUG
                              </small>{" "}
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                      <div class="card m-card shadow border-0">
                        <a href="movies-detail.html">
                          <div class="m-card-cover">
                            <div class="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                              <h6 class="text-gray-900 mb-0 font-weight-bold">
                                <i class="fa fa-heart text-danger"></i> 74%
                              </h6>
                              <small class="text-muted">88,865</small>
                            </div>
                            <img
                              src="https://via.placeholder.com/172x250.png"
                              class="card-img-top"
                              alt="..."
                            />
                          </div>
                          <div class="card-body p-3">
                            <h5 class="card-title text-gray-900 mb-1">
                              Charlie's Angels
                            </h5>
                            <p class="card-text">
                              <small class="text-muted">English</small>{" "}
                              <small class="text-danger">
                                <i class="fa fa-calendar-alt fa-sm text-gray-400"></i>{" "}
                                22 AUG
                              </small>{" "}
                            </p>
                          </div>
                        </a>
                      </div>
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
