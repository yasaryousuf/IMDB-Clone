import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FooterComponent from "./includes/Footer";
import NavbarComponent from "./includes/Navbar";
import Hero from "./includes/Hero";

import TopRated from "./components/TopRated";
import Latest from "./components/Latest";
import Popular from "./components/Popular";
import Upcoming from "./components/Upcoming";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarComponent />
          <Hero />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/top-rated" component={TopRated} />
            <Route path="/latest" component={Latest} />
            <Route path="/popular" component={Popular} />
            <Route path="/upcoming" component={Upcoming} />
          </Switch>
          <FooterComponent />
        </div>
      </Router>
    );
  }
}

export default App;
