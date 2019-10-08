import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  getNavLinkClass = path => {
    return window.location.pathname === path ? "active" : "";
  };
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/">
              IMDB
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className={"nav-item " + this.getNavLinkClass("/")}>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className={"nav-item " + this.getNavLinkClass("/top-rated")}>
                  <Link className="nav-link" to="/top-rated">
                    Top Rated
                  </Link>
                </li>
                <li className={"nav-item " + this.getNavLinkClass("/latest")}>
                  <Link className="nav-link" to="/latest">
                    Latest
                  </Link>
                </li>
                <li className={"nav-item " + this.getNavLinkClass("/popular")}>
                  <Link className="nav-link" to="/popular">
                    Popular
                  </Link>
                </li>
                <li className={"nav-item " + this.getNavLinkClass("/upcoming")}>
                  <Link className="nav-link" to="/upcoming">
                    Upcoming
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
