import React, { Component } from "react";
import { Link } from "react-router-dom";

class Casts extends Component {
  render() {
    return (
      <>
        <header className="yy-bg-primary text-center py-5 mb-4">
          <div className="container">
            <h1 className="font-weight-light yy-hero-header-text">
              Meet the Casts
            </h1>
          </div>
        </header>

        <div className="container">
          <div className="row">
            {this.props.casts
              .filter((item, index) => index < 8)
              .map(cast => (
                <div className="col-xl-2 col-md-4 mb-4" key={cast.id}>
                  <Link to={`/cast/${cast.id}`}>
                    <div className="card border-0 shadow">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title mb-0">{cast.character}</h5>
                        <div className="card-text text-black-50">
                          {cast.name}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default Casts;
