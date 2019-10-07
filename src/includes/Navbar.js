import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div class="container">
                        <Link class="navbar-brand" to="/">IMDB</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <Link class="nav-link" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/top-rated">Top Rated</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/latest">Latest</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/popular">Popular</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/upcoming">Upcoming</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>                
            </>
        )
    }
}

export default Navbar
